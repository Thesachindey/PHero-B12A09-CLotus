import React, { use } from 'react';
import { Link } from 'react-router';
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';


const Navbar = () => {
    const { user, logOut } = use(AuthContext)

    const handleLogOut = () => {
        console.log('user trying to log out')
        logOut().then(() => {
            // Sign-out successful.
            toast.success("You logged out successfully!");
        }).catch((error) => {
            // An error
            toast.error(error.code);
        });
    }


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
                                className="menu menu-sm dropdown-content space-y-3 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><MyLink to={'/'}>Home</MyLink></li>
                                <li>
                                    <MyLink to={'/all-games'}>All Games</MyLink>
                                </li>
                                <div className="auth-btn space-y-4">
                                    {
                                        user
                                            ?
                                            <div className='flex gap-5 flex-row'>
                                                <Link className='cursor-pointer' to={'/my-profile'}>
                                                    <img src={(user?.photoURL) || 'https://images.unsplash.com/profile-1739313197804-6f9cf0af7ed3image?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=32&dpr=2&crop=faces&bg=%23fff&h=32'}
                                                        className="h-10 w-10 bg-cover rounded-full  mx-auto" alt={user.name} />
                                                </Link>
                                                <button onClick={handleLogOut} className="bg-green-400 text-white  hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer ">LogOut</button>
                                            </div>
                                            :
                                            <div className="auth-btn space-y-4">
                                                <MyLink to={'/auth/login'} className="btn btn-outline ">LogIn</MyLink>
                                                <MyLink to={'/auth/register'} className="btn btn-outline ">Registration</MyLink>
                                            </div>
                                    }


                                </div>

                            </ul>
                        </div>
                        <Link to={'/'} className="logo-font font-bold text-2xl">GameHub</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex space-x-6">
                        <ul className="menu menu-horizontal space-x-2 px-1">
                            <li><MyLink to={'/'}>Home</MyLink></li>
                            <li>
                                <MyLink to={'/all-games'}>All Games</MyLink>
                            </li>
                        </ul>
                        <div className="auth-btn space-x-4">
                            {
                                user
                                    ?
                                    <div className='flex gap-5 flex-row'>
                                        <Link className='cursor-pointer' to={'/my-profile'}>
                                            <img src={(user?.photoURL) || 'https://images.unsplash.com/profile-1739313197804-6f9cf0af7ed3image?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=32&dpr=2&crop=faces&bg=%23fff&h=32'}
                                                className="h-10 w-10 bg-cover rounded-full  mx-auto" alt={user.name} />
                                        </Link>
                                        <button onClick={handleLogOut} className="bg-green-400 text-white  hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer ">LogOut</button>
                                    </div>
                                    :
                                    <div className="auth-btn space-x-4">
                                        <MyLink to={'/auth/login'} className="btn btn-outline ">LogIn</MyLink>
                                        <MyLink to={'/auth/register'} className="btn btn-outline ">Registration</MyLink>
                                    </div>
                            }


                        </div>
                    </div>
                </div>
            </MyContainer >
        </div >
    );
};

export default Navbar;