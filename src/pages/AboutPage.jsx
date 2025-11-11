import React from 'react';
import { useLoaderData } from 'react-router';
import { motion } from "framer-motion";
import GameCard from '../components/GameCard';

const AboutPage = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
             <title>All-Games</title>
            <h1 className='text-center text-6xl my-12 font-bold'>All Games</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-10 '>

                {data.map((game) => (
                    <motion.div
                        className=' h-full w-full'
                        key={game.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <GameCard game={game} />
                    </motion.div>
                ))}

            </div>
        </div>
    );
};

export default AboutPage;