import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';

const HomePage = () => {
    return (
        <div >
            {/* this is banner  */}
            <Banner />

            {/* popular games section  */}
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <PopularGames />
            </Suspense>
        </div>
    );
};

export default HomePage;