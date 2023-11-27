/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAgreement from "../../Hooks/useAgreement";


const ApartCard = ({ item }) => {

    const axiosSecure = useAxiosSecure()
    const [, refetch] = useAgreement()


    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { ApartmentImage, BlockName, FloorNo, ApartmentNo, Rent, _id } = item

    // var today = new Date();
    // var year = today.getFullYear();
    // var mes = today.getMonth() + 1;
    // var dia = today.getDate();

    const handleAggrement = () => {
        if (user && user.email) {
            // const months = [
            //     "January", "February", "March", "April",
            //     "May", "June", "July", "August",
            //     "September", "October", "November", "December"
            // ]
            // const randomMonthIndex = Math.floor(Math.random() * 12);
            // const randomMonth = months[randomMonthIndex];
            const agreement = {
                agreementId: _id,
                email: user.email,
                userName: user.displayName,
                BlockName,
                FloorNo,
                ApartmentNo,
                Rent,
                // month: randomMonth,
                status: "Pending",
            }
            axiosSecure.post('/agreements', agreement)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Your Agreement has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged in",
                text: "Please log in to Make Agreement",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border-2">
            <figure><img className=" md:h-[180px] lg:h-[300px]" src={ApartmentImage} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between mb-2">
                    <div><p className="text-xl">Block : {BlockName}</p></div>
                    <div><p className="text-xl">Floor : {FloorNo}</p></div>
                </div>
                <div className="flex justify-between">
                    <div><p className="text-xl">Apart No : {ApartmentNo}</p></div>
                    <div><p className="text-xl">Rent : {Rent} $</p></div>
                </div>
                <div className="card-actions justify-end mt-3">
                    <button
                        onClick={() => handleAggrement(item)}
                        className="btn btn-outline border-0 border-b text-red-700 bg-red-50 ">Agreement</button>
                </div>
            </div>
        </div>
    );
};

export default ApartCard;