
import Swal from "sweetalert2";
import useAllAgreements from "../../../Hooks/useAllAgreements";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Agreements = () => {

    const [allAgreements, refetch] = useAllAgreements()
    const axiosSecure = useAxiosSecure()

    const handleAccept = (item) => {
        axiosSecure.patch(`/allAgreements/${item._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Agreement Accepted',
                        text: 'Successfully',
                    })
                }
            })
    }
    const handleReject = (item) => {
        axiosSecure.patch(`/allAgreements/${item._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: 'error',
                        title: 'Agreement Rejected',
                        text: 'Successfully',
                    })
                }
            })
    }

    return (
        <div className="p-6 container mx-auto">
            <h2>Total Agreements Request : {allAgreements.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Rent</th>
                                <th>Floor No</th>
                                <th>Room No</th>
                                <th>Block No</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAgreements.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <th>{item.userName}</th>
                                    <td>{item.email}</td>
                                    <td>{item.Rent}$</td>
                                    <td>{item.FloorNo}</td>
                                    <td>{item.ApartmentNo}</td>
                                    <td>{item.BlockName}</td>
                                    <td>{item.status === 'Checked' ? 'Checked' : item.status === 'Rejected' ? 'Rejected' : 'Pending'}</td>
                                    <td>
                                        <button
                                            onClick={() => handleAccept(item)}
                                            className="btn  btn-sm btn-accent btn-outline">
                                            <p>Accept</p>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleReject(item)}
                                            className="btn btn-sm btn-error btn-outline">
                                            <p>Reject</p>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Agreements;