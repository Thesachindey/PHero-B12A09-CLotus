import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const RegisterPage = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    


    const handelRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({ name, photo, email, password });
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...loggedUser, displayName: name, photoURL: photo });
                        navigate('/');
                    }).catch((error) => {
                        console.log(error);
                        setUser(loggedUser);
                    })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                //..
            });


    }


    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 ">
                    <div className="px-10 space-y-5">
                        <h2 className='font-bold text-2xl text-center'> Register your account</h2>
                        <hr className=' px-10 text-base-300' />
                    </div>
                    <form onSubmit={handelRegister} className="card-body">
                        <fieldset className="fieldset">

                            {/* Name  */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter Your Name"
                                required />
                            {/*Photo URL */}
                            <label className="label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Enter Your Photo URL" required />
                            {/* Email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Enter Your Email" required />
                            {/* password  */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Enter Your New Password"
                                required />
                            <button type='submit' className="btn bg-green-500 btn-outline text-white border-black mt-4">Register</button>
                            <p className='font-bold text-center mt-4 '>Already Have An Account ? <Link className='text-green-500' to={'/auth/login'}>Login</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;