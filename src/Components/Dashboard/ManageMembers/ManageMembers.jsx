import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageMembers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: members = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleDeleteMember = (member) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${member._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Member has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleMakeAdmin = (member) => {
        axiosSecure.patch(`/users/admin/${member._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `${member.name} is an Admin Now`,
                        text: 'Successfully',
                    })
                }
            })
    }

    return (
        <div>
            <h2>Total Members : {members.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((member, idx) => <tr key={member._id}>
                                    <th>{idx + 1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td>
                                        {member.role === 'Admin' ? 'Admin' :
                                            <button onClick={() => handleMakeAdmin(member)} className="btn btn-sm">Make Admin</button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDeleteMember(member)} className="btn btn-sm">Remove</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMembers;