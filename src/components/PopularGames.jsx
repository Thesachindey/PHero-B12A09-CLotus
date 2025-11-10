import React, { use } from 'react';
import GameCard from './GameCard';
import MyContainer from './MyContainer';


const gamesPromise = fetch('/gameData.json').then(res => res.json())

const PopularGames = () => {
    const games = use(gamesPromise)
    // console.log(games)
    return (

        <MyContainer>
            <div>
                <h1 className='text-center text-6xl my-12 font-bold'>Popular Games</h1>

                <div className=' ms:p-2 md:p-10 grid ms:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10  '>

                    {
                        games.filter((game) => Number(game.ratings) >= 4.8).map((game) => <GameCard key={game.id} game={game} />)
                    }
                </div>
            </div>
        </MyContainer>
    );
};

export default PopularGames;