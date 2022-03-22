import * as React from 'react';
import Dot from '../components/common/dot/dot';
import Next from '../assets/icons/next.svg?component'
import Ethenium from '../assets/icons/ETH.svg?component'
import img1 from '../assets/img/img_slider-1.png'
import img2 from '../assets/img/img_slider-2.png'
import img3 from '../assets/img/img_slider-3.jpg'
import img4 from '../assets/img/img_slider-4.gif'
import img5 from '../assets/img/img_slider-5.png'
import Partnerimg1 from '../assets/img/partner1.svg?component'
import Partnerimg2 from '../assets/img/partner2.svg?component'
import Partnerimg3 from '../assets/img/partner3.svg?component'
import Partnerimg4 from '../assets/img/partner4.svg?component'
import avatar from '../assets/img/avatar.png'
import top1 from '../assets/img/top1.png'
import top2 from '../assets/img/top2.png'
import top3 from '../assets/img/top3.png'
import verify from '../assets/img/verify.png'
import explore from '../assets/img/explore.png'
import imgCollection from '../assets/img/imgCollection.jpg'
import avatar1 from '../assets/img/avatar1.jpg'
import avatar2 from '../assets/img/avatar2.jpg'
import avatar3 from '../assets/img/avatar3.jpg'
import seller2 from '../assets/img/seller2.png'
import Ether from '../assets/img/ether.svg?component'
import imgSubcribe from '../assets/img/imgSubcribe.jpg'
import Imgbanner from '../assets/img/imgbanner.svg?component'

import BgItem from '../assets/img/bg_item.svg?component'
import { HomeWrapper, Content, SlidersWrapper, SliderImg, BannerWrapper, PartnerWapper, PartnerItem, TopNFTWrapper, TopItem, Detail, Explore, HeadingSection, ExploreList, Collection, Topseller, ListSeller, Seller, WhatIsNFT, Subscribe } from './Home.style';
import { Autoplay, EffectFade, Grid } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/grid";
// @ts-ignore
import { ChevronDown, TriangleRight } from 'akar-icons';
export interface IHomeProps {
}

export function Home(props: IHomeProps) {
    return (
        <HomeWrapper>
            <Dot />
            <Dot bg={"#FFB1EE"} top="44.1rem" left='65.4rem' size='15.3rem' />
            <Dot bg={"#FFB1EE"} top="30rem" left='75%' size='15.3rem' />
            <BannerWrapper>
                <Content>
                    <h1 className='heading-1 mb-medium'>Discover, collect, and sell <span className='heading-bg'>Timeless</span> NFTs</h1>
                    <p className='paragraph-1 mb-large'>The world’s first and largest digital marketplace for crypto collectibles and non- fungible tokens (NFTs). </p>
                    <div className="group-btn">
                        {/* <Button /> */}
                        <button className="btn btn-clippath">Explore <Next /></button>
                        <button className="btn btn-text heading-bg">Create NFT's</button>
                    </div>

                    <div className='content__bottom'>
                        <div className="content__item">

                            <span className='heading-2'>
                                35m+
                            </span>
                            <br />Artwork
                        </div>
                        <div className="content__item">

                            <span className='heading-2'>
                                18m+
                            </span>
                            <br />Auctions
                        </div>
                        <div className="content__item">

                            <span className='heading-2'>
                                500k+
                            </span>
                            <br />Artists
                        </div>

                    </div>
                </Content>
                <Imgbanner className='imgbanner' />
                <SlidersWrapper className="slider">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        grabCursor={true}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    >
                        <SwiperSlide>
                            <div className="slider__item">
                                <SliderImg image={img1}></SliderImg>
                                <BgItem />
                                <Detail>
                                    <div className="infobg">
                                        <div className="left">
                                            <h3 className="name">3D Abstract Hand</h3>
                                            <p className='user'>
                                                <img src={avatar} className='avatar' alt="" />
                                                @jhonartist
                                            </p>
                                            <p className='text-2'>Reserve price</p>
                                            <p className="value"><Ethenium /> ETH 9.31 <span className='price'>($29,8846)</span></p>
                                        </div>
                                        <div className="right">
                                            <p className='text-2'>
                                                Auction Ends in
                                            </p>
                                            <ul className='hour'>
                                                <li className='hour__item'>18 <span className='text-2'>Hours</span></li>
                                                <li className='hour__item'>25 <span className='text-2'>Mins</span></li>
                                                <li className='hour__item'>44 <span className='text-2'>Secs</span></li>
                                            </ul>
                                            <button className="btn btn-primary mt-medium">Place Bid <Next /></button>
                                        </div>
                                    </div>
                                </Detail>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="slider__item">
                                <SliderImg image={img2}></SliderImg>
                                <BgItem />
                                <div className="slider__inforwrapper">
                                    <div className="slider__info">
                                        <div className="slider__left">
                                            <h3 className="name">3D Abstract Hand</h3>
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
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="slider__item">
                                <SliderImg image={img3}></SliderImg>
                                <BgItem />
                                <div className="slider__inforwrapper">
                                    <div className="slider__info">
                                        <div className="slider__left">
                                            <h3 className="name">3D Abstract Hand</h3>
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
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="slider__item">
                                <SliderImg image={img4}></SliderImg>
                                <BgItem />
                                <div className="slider__inforwrapper">
                                    <div className="slider__info">
                                        <div className="slider__left">
                                            <h3 className="name">3D Abstract Hand</h3>
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
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="slider__item">
                                <SliderImg image={img5}></SliderImg>
                                <BgItem />
                                <div className="slider__inforwrapper">
                                    <div className="slider__info">
                                        <div className="slider__left">
                                            <h3 className="name">3D Abstract Hand</h3>
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
                        </SwiperSlide>
                    </Swiper>
                </SlidersWrapper>
                <PartnerWapper>
                    <Swiper
                        modules={[Autoplay, Grid, EffectFade]}
                        // grabCursor={true}
                        slidesPerView={4}
                        spaceBetween={100}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={
                            {
                                // when window width is >= 320px
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,

                                },

                                // when window width is >= 640px
                                660: {
                                    slidesPerView: 4,
                                    spaceBetween: 40
                                }
                            }
                        }

                    >
                        <SwiperSlide>

                            <PartnerItem>
                                <Partnerimg1 fill='#fff' fillOpacity=".5" />
                            </PartnerItem>
                        </SwiperSlide>
                        <SwiperSlide>

                            <PartnerItem>
                                <Partnerimg2 fill='#fff' fillOpacity=".5" />
                            </PartnerItem>
                        </SwiperSlide>
                        <SwiperSlide>

                            <PartnerItem>
                                <Partnerimg3 fill='#fff' fillOpacity=".5" />
                            </PartnerItem>
                        </SwiperSlide>
                        <SwiperSlide>

                            <PartnerItem>
                                <Partnerimg4 fill='#fff' fillOpacity=".5" />
                            </PartnerItem>
                        </SwiperSlide>
                    </Swiper>
                </PartnerWapper>
            </BannerWrapper>

            <TopNFTWrapper>
                <HeadingSection className='heading-section'>
                    <div className="heading-3">Top NFT’s now</div>
                    <div className="viewall">
                        View all
                        <Next />
                    </div>
                </HeadingSection>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    grabCursor={true}
                    slidesPerView={3}
                    spaceBetween={35}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={
                        {
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,

                            },
                            660: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            // when window width is >= 640px
                            1000: {
                                slidesPerView: 3,
                                spaceBetween: 35
                            }
                        }
                    }
                >
                    <SwiperSlide>

                        <TopItem>
                            <img src={top1} className='img' alt="" />
                            <Detail position="initial" width="100%" inCard>
                                <div className="infobg">
                                    <div className="left">
                                        <h3 className="name">3D Abstract Hand</h3>
                                        <p className='user'>
                                            <img src={avatar} className='avatar' alt="" />
                                            @jhonartist
                                            <img src={verify} className='verify' alt="" />
                                        </p>
                                        <p className='text-2'>Reserve price</p>
                                        <p className="value"><Ethenium /> ETH 9.31 <span className='price'>($29,8846)</span></p>
                                    </div>
                                    <div className="right">
                                        <p className='text-2'>
                                            Auction Ends in
                                        </p>
                                        <ul className='hour'>
                                            <li className='hour__item'>18 <span className='text-2'>Hours</span></li>
                                            <li className='hour__item'>25 <span className='text-2'>Mins</span></li>
                                            <li className='hour__item'>44 <span className='text-2'>Secs</span></li>
                                        </ul>
                                        <button className="btn btn-primary mt-medium">Place Bid <Next /></button>
                                    </div>
                                </div>
                            </Detail>
                        </TopItem>
                    </SwiperSlide>
                    <SwiperSlide>

                        <TopItem>
                            <img src={top2} className='img' alt="" />
                            <Detail position="initial" width="100%" inCard>
                                <div className="infobg">
                                    <div className="left">
                                        <h3 className="name">3D Abstract Hand</h3>
                                        <p className='user'>
                                            <img src={avatar} className='avatar' alt="" />
                                            @jhonartist
                                            <img src={verify} className='verify' alt="" />
                                        </p>
                                        <p className='text-2'>Reserve price</p>
                                        <p className="value"><Ethenium /> ETH 9.31 <span className='price'>($29,8846)</span></p>
                                    </div>
                                    <div className="right">
                                        <p className='text-2'>
                                            Auction Ends in
                                        </p>
                                        <ul className='hour'>
                                            <li className='hour__item'>18 <span className='text-2'>Hours</span></li>
                                            <li className='hour__item'>25 <span className='text-2'>Mins</span></li>
                                            <li className='hour__item'>44 <span className='text-2'>Secs</span></li>
                                        </ul>
                                        <button className="btn btn-primary mt-medium">Place Bid <Next /></button>
                                    </div>
                                </div>
                            </Detail>
                        </TopItem>
                    </SwiperSlide>
                    <SwiperSlide>

                        <TopItem>
                            <img src={top3} className='img' alt="" />
                            <Detail position="initial" width="100%" inCard>
                                <div className="infobg">
                                    <div className="left">
                                        <h3 className="name">3D Abstract Hand</h3>
                                        <p className='user'>
                                            <img src={avatar} className='avatar' alt="" />
                                            @jhonartist
                                            <img src={verify} className='verify' alt="" />
                                        </p>
                                        <p className='text-2'>Reserve price</p>
                                        <p className="value"><Ethenium /> ETH 9.31 <span className='price'>($29,8846)</span></p>
                                    </div>
                                    <div className="right">
                                        <p className='text-2'>
                                            Auction Ends in
                                        </p>
                                        <ul className='hour'>
                                            <li className='hour__item'>18 <span className='text-2'>Hours</span></li>
                                            <li className='hour__item'>25 <span className='text-2'>Mins</span></li>
                                            <li className='hour__item'>44 <span className='text-2'>Secs</span></li>
                                        </ul>
                                        <button className="btn btn-primary mt-medium">Place Bid <Next /></button>
                                    </div>
                                </div>
                            </Detail>
                        </TopItem>
                    </SwiperSlide>
                </Swiper>
            </TopNFTWrapper>
            <Explore className='mt-section'>
                <div className="left">
                    <HeadingSection className='heading-section'>
                        <div className="heading-3 heading-section">Explore Collections</div>
                    </HeadingSection>
                    <ul className='list'>
                        <li className='item'>
                            Photography
                        </li>
                        <li className='item'>
                            Sports
                        </li>
                        <li className='item'>
                            Brands
                        </li>
                        <li className='item'>
                            Collectibles
                        </li>
                        <li className='item'>
                            Art
                        </li>
                        <li className='item'>
                            Utility
                        </li>
                        <li className='item'>
                            Brands
                        </li>
                        <li className='item'>
                            Collectibles
                        </li>
                    </ul>
                    <div className="viewall">
                        View all
                        <Next />
                    </div>
                </div>
                <div className="right">
                    <img src={explore} alt="" className="img" />
                </div>
            </Explore>
            <ExploreList className='mt-section'>
                <HeadingSection className='heading-section'>
                    <div className="heading-3">Explore Collections</div>
                    <div className="viewall">
                        View all
                        <Next />
                    </div>
                </HeadingSection>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    grabCursor={true}
                    slidesPerView={3}
                    spaceBetween={35}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={
                        {
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,

                            },
                            660: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            // when window width is >= 640px
                            1000: {
                                slidesPerView: 3,
                                spaceBetween: 35
                            }
                        }
                    }
                >
                    <SwiperSlide>
                        <Collection>
                            <img className='bg' src={imgCollection} alt="" />
                            <img className='avatar' src={avatar1} alt="" />
                            <div className="card">
                                <div className="name">Jhones Nickey</div>
                                <p className="username">@jhonartist <img src={verify} className='verify' alt="" /></p>
                                <ul className='socical'>
                                    <li className='socical__item'>125 <span className='text-3'>Fllowers</span></li>
                                    <li className='socical__item'>256 <span className='text-3'>Fllowing</span></li>
                                    <li className='socical__item'>129 <span className='text-3'>Artworks</span></li>
                                </ul>
                                <button className="btn-primary button">
                                    Follow
                                </button>
                            </div>
                        </Collection>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Collection>
                            <img className='bg' src={imgCollection} alt="" />
                            <img className='avatar' src={avatar2} alt="" />
                            <div className="card">
                                <div className="name">Jhones Nickey</div>
                                <p className="username">@jhonartist <img src={verify} className='verify' alt="" /></p>
                                <ul className='socical'>
                                    <li className='socical__item'>356 <span className='text-3'>Fllowers</span></li>
                                    <li className='socical__item'>456 <span className='text-3'>Fllowing</span></li>
                                    <li className='socical__item'>89 <span className='text-3'>Artworks</span></li>
                                </ul>
                                <button className="btn-primary button">
                                    Follow
                                </button>
                            </div>
                        </Collection>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Collection>
                            <img className='bg' src={imgCollection} alt="" />
                            <img className='avatar' src={avatar3} alt="" />
                            <div className="card">
                                <div className="name">Jhones Nickey</div>
                                <p className="username">@jhonartist <img src={verify} className='verify' alt="" /></p>
                                <ul className='socical'>
                                    <li className='socical__item'>546 <span className='text-3'>Fllowers</span></li>
                                    <li className='socical__item'>789 <span className='text-3'>Fllowing</span></li>
                                    <li className='socical__item'>54 <span className='text-3'>Artworks</span></li>
                                </ul>
                                <button className="btn-primary button">
                                    Follow
                                </button>
                            </div>
                        </Collection>

                    </SwiperSlide>
                </Swiper>
            </ExploreList>
            <Topseller className='mt-section'>
                <h3 className="heading-3 fontThree">Top Sellers this <span className='hightlight'>Month <ChevronDown strokeWidth={4} size={20} /></span></h3>
                <p className='text fontSecond mt-medium '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim minim mollit.</p>
                <ListSeller>
                    {
                        [...Array(12).keys()].map(i => <Seller>
                            <div className="index">{i + 1}</div>
                            <img src={seller2} alt="" className="avatar" />
                            <div className="user fontSecond">
                                <p className="username">
                                    Eleanor Pena
                                </p>
                                <p className="ether">
                                    <Ether /> 74875
                                </p>
                            </div>
                            <div className={`fluctuating fontSecond ${i === 1 || i === 3 || i === 8 || i === 7 || i === 10 ? 'decreased' : 'increased'}`}>
                                +468.48%
                            </div>
                        </Seller>)
                    }

                </ListSeller>
                <button className="btn-primary sellers__btn">
                    Explore all
                </button>
            </Topseller>
            <WhatIsNFT className='mt-section'>
                <div className="card">
                    <div className="content fontSecond">

                        <h1 className="heading">What are NFT’s ?</h1>
                        <p className='text-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis amet, faucibus lorem. Lectus amet odio quis sed adipiscing adipiscing magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit suspendisse curabitur eu congue dui ut.</p>
                        <div className="group-btn">

                            <a href="#" className='link'>Learn more</a>
                            <a href="#" className='link'><TriangleRight strokeWidth={2} size={24} />Watch video</a>
                        </div>
                    </div>
                </div>
            </WhatIsNFT>
            <Subscribe >
                <div className="wrapperimg">

                    <img src={imgSubcribe} className="img" alt="" />
                </div>
                <div className="content">
                    <h2 className="heading-2">Subscribe to us</h2>
                    <p className='text-3'>Specially developed to help restore a more youthful appearance with improved radiance and bounce.</p>
                    <form action="" className='form'>
                        <input type="text" placeholder='Your work email address' name="" id="" className="input" />
                        <button className="btn btn-primary">Subcribe</button>
                    </form>
                </div>
            </Subscribe>
        </HomeWrapper>
    );
}
