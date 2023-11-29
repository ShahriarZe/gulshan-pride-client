import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAgreement from "../../../Hooks/useAgreement";
import useAuth from "../../../Hooks/useAuth";


const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [agreement] = useAgreement()
    const totalPrice = agreement.reduce((total, item) => total + item.Rent, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment Error', error)
            setError(error.message)
        }
        else {
            console.log('Payment Method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log('Confirm Error')
        }
        else {
            console.log('Payment Intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction Successful', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date()
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('Payment Successful', res.data)
            }
        }
    }


    return (
        <div className="max-w-3xl p-6">
            <div className="text-center text-3xl mb-10">
                <h2>Make Your Payment</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-error w-full mt-2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-700">{error}</p>
                {transactionId && <p className="text-green-500">Transaction Id : {transactionId}, Payment Successfull</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;