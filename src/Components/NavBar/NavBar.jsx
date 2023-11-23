import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import def from '../../assets/user.png'

const NavBar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Apartment</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                            <img src={def} alt="" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border">
                        <div className="text-xl text-center">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="text-xl text-center">
                            <h2>Login</h2>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;