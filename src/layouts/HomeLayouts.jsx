import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Newsletter from '../components/Newsletter';
import MyContainer from '../components/MyContainer';

const HomeLayouts = () => {
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
            <footer>
                <Newsletter />
            </footer>
        </div>
    );
};

export default HomeLayouts;