import * as React from 'react';
import Dot from '../components/common/dot/dot';
import Next from '../assets/icons/next.svg?component'
import { HomeWrapper, Content } from './Home.style';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../components/common/button/Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export interface IHomeProps {
}

export function Home(props: IHomeProps) {
    return (
        <HomeWrapper>
            <Dot />
            <Dot bg={"#FFB1EE"} top="44.1rem" left='65.4rem' size='15.3rem' />
            <Content>
                <h1 className='heading-1 mb-medium'>Discover, collect, and sell <span className='heading-bg'>Timeless</span> NFTs</h1>
                <p className='paragraph-1 mb-large'>The world’s first and largest digital marketplace for crypto collectibles and non- fungible tokens (NFTs). </p>
                <div className="group-btn">
                    {/* <Button /> */}
                    <button className="btn btn-clippath">Explore <Next /></button>
                    <button className="btn btn-text heading-bg">Create NFT's</button>
                </div>
            </Content>
            <div className="home__silder">
                slider
                {/* <<Swiper
        id="main"
                    navigation
                    pagination
                    autoplay
                    spaceBetween={0}
                    slidesPerView={1}
                    onInit={(swiper) => console.log("Swiper initialized!", swiper)}
                    onSlideChange={(swiper) => {
                        console.log("Slide index changed to: ", swiper.activeIndex);
                    }}
                    onReachEnd={() => console.log("Swiper end reached")}
                >
                    {images.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={photo.url}
                                alt={photo.alternativeText}
                                style={{ width: "500px" }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </div>
        </HomeWrapper>
    );
}
