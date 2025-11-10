import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import { PacmanLoader } from 'react-spinners';

const HomePage = () => {
    return (
        <div >
            {/* this is banner  */}
            <Banner />

            {/* popular games section  */}
            <Suspense fallback={<span><PacmanLoader /></span>}>
                <PopularGames />
            </Suspense>
        </div>
    );
};

export default HomePage;