import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import GameDetailsCard from '../components/GameDetailsCard';
import Navbar from '../components/Navbar';

const GameDetailsPage = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [game, setGame] = useState({});
    // console.log(id, data, game);

    useEffect(() => {
        const gameDetails = data.find((singleGame) => singleGame.id == id);
        setGame(gameDetails)
    }, [data, id])

    return (
        <div>
           
                <h2 className="text-4xl text-center pt-10 font-bold">
                    Info About <span className="text-green-400">{game.title}</span>
                </h2>
                <div className="divider w-1/2 mx-auto"></div>
          

            <main className='py-10'>
                <GameDetailsCard game={game} />
            </main>

        </div>
    );
};

export default GameDetailsPage;