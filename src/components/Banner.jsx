import React from 'react';
import pubgImg from '../assets/pubg.jpg'
import assassinImg from '../assets/assassin.jpg'
import valorantImg from '../assets/valorant-.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item  w-full">
                    <img
                        src={pubgImg}
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={assassinImg}
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={valorantImg}
                        className="w-full" />
                </div>
                
            </div>
            {/* <div className="flex w-full justify-center gap-2">
                <a href="#item1" className="btn btn-outline ">1</a>
                <a href="#item2" className="btn btn-outline ">2</a>
                <a href="#item3" className="btn btn-outline ">3</a>
     
            </div> */}
        </div>
    );
};

export default Banner;