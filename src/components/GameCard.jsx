import React from 'react';
import { Link } from 'react-router';

const GameCard = ({ game }) => {
    const { id, title, coverPhoto, category, downloadLink, description, ratings, developer } = game;

    return (
        <div className=' h-full w-full'>
            <Link to={`/game-details/${id}`} className="card bg-base-100 h-full w-full shadow-xl cursor-pointer rounded-lg transform transition-transform duration-800 ease-in-out hover:scale-105">
                <figure>
                    <img
                        src={coverPhoto}
                        alt={title}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge bg-green-500 text-white">{ratings}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline bg-green-200 text-green-700">{developer}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GameCard;