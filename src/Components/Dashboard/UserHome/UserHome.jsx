import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth()
    return (
        <div className="p-6">
            <h2>{user.displayName}</h2>
            <div className="avatar">
                <div className="w-32 rounded">
                    <img src={user.photoURL} />
                </div>
            </div>
            <h2>{user.email}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Rent</th>
                            <th>Floor No</th>
                            <th>Room No</th>
                            <th>Block No</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{1}</th>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserHome;