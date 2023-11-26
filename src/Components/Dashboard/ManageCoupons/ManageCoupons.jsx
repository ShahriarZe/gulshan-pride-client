import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCoupons from "../../../Hooks/useCoupons";


const ManageCoupons = () => {

    const [coupons,refetch] = useCoupons()
    const axiosSecure = useAxiosSecure()


    const handleCoupon = e => {
        e.preventDefault()
        const form = e.target
        const code = form.code.value
        const discount = form.discount.value
        const addCoupon = { code, discount }
        console.log(addCoupon)
        axiosSecure.post('/coupons', addCoupon)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    refetch()
                    Swal.fire({
                        icon: "success",
                        title: "Coupon has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset()
                }
            })
    }
    return (
        <div className=" p-8 mb-10 mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Available Coupons For Apartments: {coupons.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coupons.map((coupon, idx) => <tr key={coupon._id}>
                                <th>{idx + 1}</th>
                                <td>{coupon.code}</td>
                                <td>{coupon.discount} %</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="mt-8 max-w-xl">
                <h1 className="text-center font-bold text-2xl">Add Coupon</h1>
                <form onSubmit={handleCoupon} className="card-body">
                    <div className="form-control">
                        <input type="text" name="code" placeholder="code" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="discount" placeholder="discount" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline text-red-700" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};


export default ManageCoupons;







