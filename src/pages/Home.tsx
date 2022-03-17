import * as React from 'react';
import Dot from '../components/common/dot/dot';
import Next from '../assets/icons/next.svg?component'
import Ethenium from '../assets/icons/ETH.svg?component'
import img1 from '../assets/img/img_slider-1.png'
import avatar from '../assets/img/avatar.png'
import BgItem from '../assets/img/bg_item.svg?component'
import { HomeWrapper, Content, SlidersWrapper, SliderImg } from './Home.style';
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
            <SlidersWrapper className="slider">
                <div className="slider__item">
                    <SliderImg image={img1}></SliderImg>
                    <BgItem />
                    <div className="slider__inforwrapper">
                        <div className="slider__info">
                            <div className="slider__left">
                                <h3 className="heading-3">3D Abstract Hand</h3>
                                <p className='slider__user'>
                                    <img src={avatar} className='slider__avatar' alt="" />
                                    @jhonartist
                                </p>
                                <p className='text-2'>Reserve price</p>
                                <p className="slider__value"><Ethenium /> ETH 9.31 <span className='slider__price'>($29,8846)</span></p>
                            </div>
                            <div className="slider__right">
                                <p className='text-2'>
                                    Auction Ends in
                                </p>
                                <ul className='slider__hour'>
                                    <li className='hour__item'>18 <span className='text-2'>Hours</span></li>
                                    <li className='hour__item'>25 <span className='text-2'>Mins</span></li>
                                    <li className='hour__item'>44 <span className='text-2'>Secs</span></li>
                                </ul>
                                <button className="btn btn-primary mt-medium">Place Bid <Next /></button>
                            </div>
                        </div>
                    </div>
                </div>
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
            </SlidersWrapper>
        </HomeWrapper>
    );
}
