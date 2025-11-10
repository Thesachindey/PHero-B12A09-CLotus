import React from 'react';
import { Link } from 'react-router';
import MyContainer from './MyContainer';
import MyLink from './MyLink';

const Navbar = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
            <MyContainer>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><MyLink to={'/'}>Home</MyLink></li>
                                <li>
                                    <MyLink to={'/about'}>About</MyLink>
                                </li>
                                <li>
                                    <MyLink to={'/login'}>LogIn</MyLink>
                                </li>
                                <li>
                                    <MyLink to={'/register'}>Registration</MyLink>
                                </li>

                            </ul>
                        </div>
                        <Link to={'/'} className="logo-font font-bold text-2xl">GameHub</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex space-x-6">
                        <ul className="menu menu-horizontal space-x-2 px-1">
                            <li><MyLink to={'/'}>Home</MyLink></li>
                            <li>
                                <MyLink to={'/about'}>About</MyLink>
                            </li>
                        </ul>
                        <div className="auth-btn space-x-4">
                            <MyLink to={'/login'} className="btn btn-outline ">LogIn</MyLink>
                            <MyLink to={'/register'} className="btn btn-outline "> Registration</MyLink>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Navbar;