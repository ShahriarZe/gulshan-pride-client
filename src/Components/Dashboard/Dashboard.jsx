import logo from '../../assets/logo.png'
import { FaGift, FaHome, FaList, FaMicroblog, FaUser, FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;

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
                            <>
                                <li><NavLink to="/dashboard/adminHome"><FaUser /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/agreements"><FaList /> Agreement Requests</NavLink></li>
                                <li><NavLink to="/dashboard/manageMembers"><FaUsers /> Manage Members</NavLink></li>
                                <li><NavLink to="/dashboard/makeAnnouncements"><FaMicroblog /> Make Announcement</NavLink></li>
                                <li><NavLink to="/dashboard/manageCoupons"><FaGift /> Manage Coupons</NavLink></li>
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