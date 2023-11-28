import useApart from "../../../Hooks/useApart";
import useAuth from "../../../Hooks/useAuth";
import useMembers from "../../../Hooks/useMembers";


const AdminHome = () => {
    const { user } = useAuth()
    const [apart] = useApart()
    const [ members]=useMembers()

    return (
        <div className="p-6">
            <h2 className="mb-2 text-3xl">Name : {user.displayName}</h2>
            <div className="avatar">
                <div className="w-32 rounded">
                    <img src={user.photoURL} />
                </div>
            </div>
            <h2 className="text-2xl my-4">Admin Stats :</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{members.length}</div>
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