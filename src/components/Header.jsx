import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import SecondaryButton from "./SecondaryButton";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const navItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
            {/* <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> */}
        </>
    )

    const handleLogout = () => {
        logoutUser()
            .then(result => {
                console.log(result);
                toast.success('Logout Successful.');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="navbar bg-base-100 my-12">
            <Toaster />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                {
                    user && <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-ghost btn-square m-1">
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a><img src={user.photoURL} className="mx-auto" alt="" /></a></li>
                            <li><a>{user.displayName}</a></li>
                            <li onClick={handleLogout}><a>Logout</a></li>
                        </ul>
                    </div>
                }
                <SecondaryButton btnText="Appointment"></SecondaryButton>
            </div>
        </div>
    );
};

export default Header;