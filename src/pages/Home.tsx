import * as React from 'react';
import Dot from '../components/common/dot/dot';
import Next from '../assets/icons/next.svg?component'
export interface IHomeProps {
}

export function Home(props: IHomeProps) {
    return (
        <div className='home'>
            Home
            <Dot />
            <Dot bg={"#FFB1EE"} top="44.1rem" left='65.4rem' size='15.3rem' />
            <h1>Discover, collect, and sell Timeless NFTs</h1>
            <p>The world’s first and largest digital marketplace for crypto collectibles and non- fungible tokens (NFTs). </p>
            <div className="group-btn">
                <button className="btn">Explore <Next /></button>
                <button className="btn-2">Create NFT's</button>
            </div>
        </div>
    );
}
