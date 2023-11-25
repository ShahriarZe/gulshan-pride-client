import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import loginBG from '../../assets/loginBG.png'


const Login = () => {
    const bgStyle = {
        backgroundImage: `url(${loginBG})`,
    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const [errorText, setErrorText] = useState('')

    const { googleSignIn, signInUser } = useAuth()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations...',
                    text: 'Login Successfull',
                })
                navigate(from, { replace: true })
            })
            .catch(err => {
                setErrorText(err.message)
                console.log(err);
                e.target.reset()
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong Information!',
                })
            })
    }

    const handleGoogleButton = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations...',
                    text: 'Login Successfull',
                })
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen max-w-7xl mx-auto bg-cover" style={bgStyle}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login to Explore <span className='text-red-700 font-extrabold'>G</span>ulshan<span className='text-red-700 font-extrabold'>P</span>ride!</h1>
                        <p className="py-6">Your key to a tailored building management experience awaits. Enter your credentials to unlock a realm of personalized services</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl border border-red-700">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline text-red-700" type="submit" value="Login" />
                            </div>
                            <div>
                                {
                                    errorText && <p className='text-red-700'>{errorText}</p>
                                }
                            </div>
                        </form>
                        <label className="label px-4">
                            New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                        </label>
                        <div className="divider">continue with</div>
                        <div className="flex justify-center">
                            <div className="mb-5">
                                <button onClick={handleGoogleButton} className=" btn btn-outline  text-red-700">
                                    <FaGoogle></FaGoogle>
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;