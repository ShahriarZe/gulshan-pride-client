import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import def from '../../assets/user.png'
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';

const NavBar = () => {

    const { user, logOut } = useAuth()
    const [isAdmin]=useAdmin()

    const links = <>
        <li className="lg:mr-5"><NavLink to='/'>Home</NavLink></li>
        <li className="lg:mr-5"><NavLink to='/apartments'>Apartments</NavLink></li>
        {
            user && isAdmin && <li className="lg:mr-5"><NavLink to='/dashboard/adminHome'>Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li className="lg:mr-5"><NavLink to='/dashboard/memberHome'>Dashboard</NavLink></li>
        }
        {/* <li>
            <Link to="/dashboard/agreements">
                Agreement Requests
                <div className="badge">{allAgreements.length}</div>
            </Link>
        </li> */}
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl max-w-screen-xl mx-auto border-x-2 border-red-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-red-700">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to='/'><img className='lg:w-6/12 invisible md:visible' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} alt="" /> :
                                    <img src={def} alt="" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 border-2 border-red-700  z-10">
                        <div className="text-xl text-center">
                            {
                                user && <h1 className='border-b border-red-700 font-bold'>{user?.displayName}</h1>
                            }
                        </div>
                        <div className="text-xl text-center">
                            {
                                user ? <button onClick={logOut}>SignOut</button> :
                                    <Link to="/login"><button className="btn btn-outline w-full">Login</button></Link>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;