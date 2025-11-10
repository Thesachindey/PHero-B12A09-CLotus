import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <PacmanLoader />
        </div>
    );
};

export default LoadingPage;