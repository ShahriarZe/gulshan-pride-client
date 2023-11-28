import useAgreement from "../../../Hooks/useAgreement";
import useAuth from "../../../Hooks/useAuth";


const MemberHome = () => {
    const { user } = useAuth()
    const [agreement] = useAgreement()
    return (
        <div className="p-6">
            <h2>Name :{user.displayName}</h2>
            <h2>Email : {user.email}</h2>
            <div className="avatar">
                <div className="w-32 rounded">
                    <img src={user.photoURL} />
                </div>
            </div>
            <div className="p-6">
                <h2>Total Agreements Request : {agreement.length}</h2>
                <div>
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
                                {
                                    agreement.map((item, idx) => <tr key={item._id}>
                                        <th>{idx + 1}</th>
                                        <td>{item.Rent}$</td>
                                        <td>{item.FloorNo}</td>
                                        <td>{item.ApartmentNo}</td>
                                        <td>{item.BlockName}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberHome;