import logo from '../../assets/logo.png'
import { FaGift, FaHome, FaList, FaMicroblog, FaMoneyBillAlt, FaUser, FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../../Hooks/useAdmin';
import useMemberRole from '../../Hooks/useMemberRole';


const Dashboard = () => {


    const [isAdmin] = useAdmin();
    const [isMember] = useMemberRole()

    return (
        <div className="flex max-w-7xl mx-auto">
            <div className="w-44 lg:w-64 min-h-screen bg-red-300">
                <ul className="menu ">
                    <img className='p-2' src={logo} alt="" />
                    <div className="divider"></div>
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome"><FaUser /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/agreements"><FaList /> Agreement Requests</NavLink></li>
                                <li><NavLink to="/dashboard/manageMembers"><FaUsers /> Manage Members</NavLink></li>
                                <li><NavLink to="/dashboard/makeAnnouncements"><FaMicroblog /> Make Announcement</NavLink></li>
                                <li><NavLink to="/dashboard/manageCoupons"><FaGift /> Manage Coupons</NavLink></li>
                            </>

                            :
                            isMember ?
                                <>
                                    <li><NavLink to="/dashboard/memberHome"><FaUser /> My Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/makePayment"><FaMoneyBillAlt /> Make Payment</NavLink></li>
                                    <li><NavLink to="/dashboard/paymentHistory"><FaUsers /> Payment History</NavLink></li>
                                    <li><NavLink to="/dashboard/announcements"><FaMicroblog /> Announcements</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to="/dashboard/userHome"><FaUser /> User Profile</NavLink></li>
                                    <li><NavLink to="/dashboard/announcements"><FaMicroblog /> Announcements</NavLink></li>
                                </>

                    }

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/apartments"><MdApartment /> Apartments</NavLink></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;


{/* <>
                                <li><NavLink to="/dashboard/adminHome"><FaUser /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/agreements"><FaList /> Agreement Requests</NavLink></li>
                                <li><NavLink to="/dashboard/manageMembers"><FaUsers /> Manage Members</NavLink></li>
                                <li><NavLink to="/dashboard/makeAnnouncements"><FaMicroblog /> Make Announcement</NavLink></li>
                                <li><NavLink to="/dashboard/manageCoupons"><FaGift /> Manage Coupons</NavLink></li>
                            </> */}