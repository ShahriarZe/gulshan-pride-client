import useAgreement from "../../../Hooks/useAgreement";

const Agreements = () => {
    const [agreement] = useAgreement()
    return (
        <div className="p-6">
            <h2>Total Agreements Request : {agreement.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Floor No</th>
                                <th>Rent</th>
                                <th>Room No</th>
                                <th>Block No</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                agreement.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <th>{item.userName}</th>
                                    <td>{item.email}</td>
                                    <td>{item.FloorNo}</td>
                                    <td>{item.Rent} $</td>
                                    <td>{item.ApartmentNo}</td>
                                    <td>{item.BlockName}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button className="btn  btn-sm">
                                            <p>Accept</p>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm">
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