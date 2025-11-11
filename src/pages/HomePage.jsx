import React, { Suspense, use } from 'react';
import Banner from '../components/Banner';
import PopularGames from './PopularGames';
import { PacmanLoader } from 'react-spinners';
import LoadingPage from './LoadingPage';

const HomePage = () => {
  
    return (
        <div className='mb-10' >
             <title>GameHub-Home</title>
            {/* this is banner  */}
            <Banner />
           
            {/* popular games section  */}
            <Suspense fallback={<LoadingPage />}>
                <PopularGames />
            </Suspense>
        </div>
    );
};

export default HomePage;