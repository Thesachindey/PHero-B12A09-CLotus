
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const googleProvider = new GoogleAuthProvider();


const LoginPage = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);


    const {
        signIn,
        signInWithGoogleFunc,
        user,
        setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handelLogIn = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log({ email, password });

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`);

            }).catch((error) => {
                const errorCode = error.code;

                // Handle different Firebase Auth errors
                if (errorCode === 'auth/invalid-email') {
                    setError('Invalid email address. Please check and try again.');
                } else if (errorCode === 'auth/user-not-found') {
                    setError('No user found with this email.');
                } else if (errorCode === 'auth/wrong-password') {
                    setError('Incorrect password. Please try again.');
                } else if (errorCode === 'auth/too-many-requests') {
                    setError('Too many attempts. Please wait and try later.');
                } else {
                    setError('Something went wrong. Please try again.');
                }


            });
    }

    // google signIn
    const handleGoogleSignin = () => {


        // signInWithPopup(auth, googleProvider)
        signInWithGoogleFunc()
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(`${location.state ? location.state : '/'}`);
                setUser(user);
                toast.success("SignIn completed!!")


            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                toast.error(errorCode);
                console.log(errorCode);
            });
    };


    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                    <div className="px-10 space-y-5">
                        <h2 className='font-bold text-2xl text-center'>Login your account</h2>
                        <hr className=' px-10 text-base-300' />
                    </div>
                    <form onSubmit={handelLogIn} className="card-body">
                        <fieldset className="fieldset">
                            {/* email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email"
                                required
                            />

                            {/* Password  */}
                            <div className="relative">
                            <label className="label">Password</label>
                                <input
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    className="input "
                                    required
                                />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-[30px] top-[32px] cursor-pointer z-50"
                                >
                                    {show ? <FaEye /> : <IoEyeOff />}
                                </span>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {
                                error && <p className='text-red-600 font-semibold mt-2'>{error}</p>
                            }

                            <button type='submit' className="btn bg-green-400 hover:bg-green-500 btn-outline text-white border-black mt-4">Login</button>

                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>

                            {/* Google Signin */}
                            <button
                                type="submit"
                                onClick={handleGoogleSignin}
                                className="flex items-center justify-center gap-3 bg-green-400 text-white px-5 py-2 rounded-lg w-full font-semibold hover:bg-green-500 btn btn-outline border-black transition-colors cursor-pointer"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="google"
                                    className="w-5 h-5"
                                />
                                Continue with Google
                            </button>


                            <p className='font-bold text-center mt-4 '>Dont’t Have An Account ? <Link className='text-green-500' to={'/auth/register'}>Register</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;