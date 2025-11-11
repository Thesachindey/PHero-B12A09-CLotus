import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import MyContainer from '../components/MyContainer';

const AuthLayouts = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className='min-h-screen'>
                <MyContainer>
                    <Outlet />
                </MyContainer>
            </main>

        </div>
    );
};

export default AuthLayouts;