import useApart from "../../../Hooks/useApart";
import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const { user } = useAuth()
    const [apart] = useApart()

    return (
        <div>
            <h2>Name : {user.displayName}</h2>
            <div className="avatar">
                <div className="w-32 rounded">
                    <img src={user.photoURL} />
                </div>
            </div>
            <h2>Total Apartmets : {apart.length}</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Apartments</div>
                    <div className="stat-value">{apart.length}</div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;