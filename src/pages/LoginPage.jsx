
import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                    <div className="px-10 space-y-5">
                        <h2 className='font-bold text-2xl text-center'>Login your account</h2>
                        <hr className=' px-10 text-base-300' />
                    </div>
                    <form  className="card-body">
                        <fieldset className="fieldset">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email"
                                required
                            />
                            {/* password  */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password"
                                required />
                            <div><a className="link link-hover">Forgot password?</a></div>

                            {
                             <p className='text-red-600 font-semibold mt-2'></p>
                            }

                            <button type='submit' className="btn bg-green-500 btn-outline text-white border-black mt-4">Login</button>
                            <p className='font-bold text-center mt-4 '>Dont’t Have An Account ? <Link className='text-green-500' to={'/auth/register'}>Register</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;