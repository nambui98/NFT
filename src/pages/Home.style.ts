import styled, { StyledComponent } from 'styled-components';
import bgwhatisNFT from '../assets/img/bgwhatisNFT.jpg';
const bpLargest = '75em',//1200px
    bpLarge = '68.75em', //1100px
    bpMedium = '56.25em', //900px
    bpSmall = '48em', //768px
    bpSmallest = '41.25em'; //660px
const HomeWrapper = styled.div`
`
const BannerWrapper = styled.div`
    /* display: flex;
    justify-content: space-between;
    align-items: flex-start; */
    padding-top: 11.6rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    @media only screen and (max-width: ${bpSmallest}) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
    .imgbanner{
        position: absolute;
        top: 60%;
        right: 38%;
        /* transform: translate(-50%, -50%); */
    }
`
const Content = styled.div`
    flex: 0 0 60%;
    @media only screen and (max-width: ${bpSmall}) {
        flex: 0 0 50%;
    }
    .content{
        &__bottom{
            margin-top: 7rem;
            display: flex;
            @media only screen and (max-width: ${bpSmallest}) {
                justify-content: space-between;
            }
        }
        &__item{
            line-height: 1;
            font-size: 1.8rem;
            color:#fff;
            padding: 0 2rem;
            z-index: 1;
            &:first-child{
                padding-left: 0;
            }
            &:nth-child(2){
                border-right: 1px solid rgba(255, 255, 255, 0.26);
                border-left: 1px solid rgba(255, 255, 255, 0.26);
            }
        }
    }
`
const SlidersWrapper = styled.div`
    flex: 1;
    filter: drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) ;
    border-radius: 1.8rem;
    display: flex;
    width: 100%;
    margin-left: 7rem;
    justify-content: center;
    @media only screen and (max-width: ${bpLarge}) {
        margin-left: 2rem;
    }
    @media only screen and (max-width: ${bpSmallest}) {
        margin-left: 0rem;
        margin-top: 5rem;
        .swiper{
            width: 100%;
        }
    }
    .slider{
        
       &__item{
           position: relative;
       }
       &__inforwrapper{
           position: absolute;
           bottom: -10rem;
           left: 14rem;
           box-sizing: border-box;
       }
       &__info{
            position: relative;
            height: 18.1rem;
            width: 33.6rem;
            padding: 2.7rem 2.3rem;
            backdrop-filter: blur(20px);
            border-radius: 5px;
            clip-path: polygon(0 4.5rem,  4.5rem 0, 100% 0, 100% 100%, 0 100%);
            z-index: 0;
            border-top-left-radius:55px;

            color: #fff;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            backdrop-filter: blur(17px);
            box-shadow: 10px 20px 50px rgb(0 0 0 / 40%);
            &::before {
                content: "";
                position: absolute;
                top: .3rem;
                left: .3rem;
                height: 17.5rem;
                width: 33rem;
                z-index: -1;
                /* background: rgba(255, 255, 255, 0.1); */
                background: rgba(0, 0, 0, 0.1);

                border-radius: 5px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(17px);
                -webkit-backdrop-filter: blur(17px);
                border-top-left-radius:55px;
                clip-path: polygon(0 4.5rem,  4.5rem 0, 100% 0, 100% 100%, 0 100%);
            }
       }
       &__avatar{
           width: 3rem;
           height: 3rem;
           /* object-fit: contain; */
           border-radius: 50%;
           vertical-align: middle;
           margin-right: 1rem;

       }
       &__left{
         flex: 0 0 55%;
       }
       &__right{
           flex: 1;
           margin-left: 1rem;
       }
       &__user{
           margin-top: .5rem;
           margin-bottom: 1.5rem;
       }
       &__hour{
           list-style: none;
           display: flex;
           justify-content: space-between;
           margin-top: .5rem;
           .hour__item{
               text-align: center;
               width: min-content;
           }
       }
       &__value{
            font-weight: 700;
            font-size: 1.6rem;
            margin-left: -5px;
            margin-top: .5rem;
            svg{
                vertical-align: middle;
                width: 3rem;
                height: 3rem;
            }
       }
       &__price{
           font-size: 1.3rem;
           font-weight: 400;
       }
    }
`
const Detail: StyledComponent<"div", any, {
    position?: string,
    width?: string | number,
    inCard?: boolean
}, never> = styled.div`
    position: ${({ position }: any) => position || 'absolute'};
    bottom: -10rem;
    left: 14rem;
    box-sizing: border-box;
    @media only screen and (max-width: ${bpLargest}) {
        bottom: -10rem;
        left: 5rem;
    }
    @media only screen and (max-width: ${bpLarge}) {
        bottom: -10rem;
        left: 0rem;
    }
    @media only screen and (max-width: ${bpSmallest}) {
        right: 0;
    }
    .infobg{
        position: relative;
        height: 18.1rem;
        width: ${({ width }: any) => width || '33.6rem'};
        padding: 2.7rem 2.3rem;
        backdrop-filter: blur(20px);
        border-radius: 5px;
        @media only screen and (max-width: ${bpLargest}) {
            width: ${({ width }: any) => width || '31rem'};
            padding: 2.4rem 2rem;
            height: 17.1rem;
        }
        @media only screen and (max-width: ${bpLarge}) {
            width: ${({ width }: any) => width || '32rem'};
        }
        @media only screen and (max-width: ${bpSmallest}) {
            width: 100%;
        }
        ${({ inCard }: any) => !inCard &&
        `
                clip-path: polygon(0 4.5rem,  4.5rem 0, 100% 0, 100% 100%, 0 100%);
                border-top-left-radius:55px;
                @media only screen and (max-width: ${bpLarge}) {
                    border-top-left-radius:0;
                }
            `
    };
        
        z-index: 0;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        backdrop-filter: blur(17px);
        box-shadow: 10px 20px 50px rgb(0 0 0 / 40%);
        &::before {
            content: "";
            position: absolute;
            top: .3rem;
            left: .3rem;
            height: 17.5rem;
            width: ${({ width }: any) => (width && `calc(${width} - 0.6rem)`) || '33rem'};;
            z-index: -1;
            background: rgba(0, 0, 0, 0.1);

            border-radius: 5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(17px);
            -webkit-backdrop-filter: blur(17px);
            @media only screen and (max-width: ${bpLargest}) {
                width: ${({ width }: any) => (width && `calc(${width} - 0.6rem)`) || '30.4rem'};;
                padding: 2.4rem 2rem;
                height: 16.5rem;
            }
            @media only screen and (max-width: ${bpLarge}) {
                width: ${({ width }: any) => width || '31.4rem'};
            }
            @media only screen and (max-width: ${bpSmallest}) {
                width: calc(100% - 0.6rem);
            }
            ${({ inCard }: any) => !inCard && `
                border-top-left-radius:55px;
                clip-path: polygon(0 4.5rem,  4.5rem 0, 100% 0, 100% 100%, 0 100%);
                @media only screen and (max-width: ${bpLarge}) {
                    border-top-left-radius:0;
                }
                `
    };
        }
    }
    .avatar{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 1rem;
    }
    .left{
        flex: 0 0 55%;
    }
    .right{
        flex: 1;
        margin-left: 1rem;
    }
    .user{
        margin-top: .5rem;
        margin-bottom: 1.5rem;
    }
    .hour{
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-top: .5rem;
        .hour__item{
            text-align: center;
            width: min-content;
        }
    }
    .value{
        font-weight: 700;
        font-size: 1.6rem;
        margin-left: -5px;
        margin-top: .5rem;
        svg{
            vertical-align: middle;
            width: 3rem;
            height: 3rem;
        }
    }
    .price{
        font-size: 1.3rem;
        font-weight: 400;
    }
    .name{
        ${({ fontSize }: any) => `font-size: ${fontSize};`}
        
    }
    
`
const SliderImg: any = styled.div`
    display: block;
    width: 40rem;
    height: 47.7rem;
    margin-bottom: 10rem;
    
    filter: url('#goo');
    @media only screen and (max-width: ${bpLargest}) {
        width: 32rem;
        height: 37.7rem;
    }
    @media only screen and (max-width: ${bpSmallest}) {
        width: 100%;
        
        /* height: max-content; */
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        padding-top: 100%;
        width: 100%;
        /* height: 100%; */
        background-image: url(${({ image }: any) => image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        clip-path: polygon(0 6rem,  10rem 0, 100% 0, 100% 100%, 0 100%);
    }
`
const PartnerWapper = styled.div`
    margin-top: 8rem;
    grid-column: 1/-1;
    grid-row: 2/3;
`
const PartnerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    cursor: pointer;
    svg{
        transition: all .3s;
    }
    &:hover svg{
        fill-opacity: 1;
    }
`
const TopNFTWrapper = styled.div`
    margin-top: 12rem; 
`
const TopItem = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    .img{
        width: 100%;
        height: 40rem;
        object-fit: cover;
    }

`
const Explore = styled.div`
    display: flex;
    color: #fff;
    gap: 13rem;
    @media only screen and (max-width: ${bpSmallest}) {
        flex-direction: column;
    }
    @media only screen and (max-width: ${bpMedium}) {
        gap: 5rem;
    }
    @media only screen and (max-width: ${bpLarge}) {
        gap: 8rem;
    }
    .left{
        flex: 0 0 60%;

    }
    .list{
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-top: 5rem;
        margin-bottom: 4rem;
    }
    .item{
        padding: 3rem 0;
        text-align: center;
        position: relative;
        cursor: pointer;
        font-size: 2.6rem;
        font-weight: 700;
        color: rgba(255, 255, 255, .5);
        @media only screen and (max-width: ${bpSmall}) {
            padding: 2rem 0;
        }
        &::before{
            content: "";
            position: absolute;
            inset: 0; //top, right, left, botton: 0;
            padding: 2px;
            background: linear-gradient(-90deg, rgba(255, 86, 246, .4) 21.43%, rgba(185, 54, 238, .4) 50.63%, rgba(59, 172, 226, .4) 100%, rgba(64, 106, 255, .4) 117.04%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
        }
        &:hover{
            background-image: linear-gradient(92.23deg, #FF56F6 21.43%, #B936EE 50.63%, #3BACE2 100%, #406AFF 117.04%);
             filter: drop-shadow(0px 4.42184px 107.23px rgba(255, 86, 246, .6));
             color: rgba(255, 255, 255, 1);
        }
        &:hover::before{
            background: linear-gradient(-90deg, rgba(255, 86, 246, 1) 21.43%, rgba(185, 54, 238, 1) 50.63%, rgba(59, 172, 226, 1) 100%, rgba(64, 106, 255, 1) 117.04%);

        }
    }
    .viewall{
        text-align: right;
        font-family: 'Orbitron', sans-serif;
    }
    .right{
        flex:1;
        @media only screen and (max-width: ${bpSmallest}) {
            align-self: center;
        }
    }
    .img{
        width: 40rem;
        transform: translateY(-3rem);
        @media only screen and (max-width: ${bpSmall}) {
            width: 30rem;
             transform: translateY(0rem);
        }
        @media only screen and (max-width: ${bpSmallest}) {
            margin-top: -10rem;
        }
        
    }
`
const HeadingSection = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
`
const ExploreList = styled.div`

`
const Collection = styled.div`
    margin-top: 5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, .4);
    .bg{
        height: 20rem;
        width: 100%;
        object-fit: cover;
    }
    .avatar{
        width: 16rem;
        height: 16rem;
        border-radius: 50%;
        border: 3px solid #fff;
        object-fit: cover;
        position: absolute;
        top: 10rem;
        left: 50%;
        transform: translate(-50%, 0%);
        z-index: 1;
    }
    .card{   
        .name{
            font-size: 2.4rem;
            font-weight: 500;
            margin-top: 7.5rem;
        }
        .username{
            font-weight: 200;
            font-size: 2rem;
        }
        .socical{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 5rem;
            list-style: none;
            margin-top: 2rem;
            &__item{
                display: flex;
                flex-direction: column;
                font-size: 3rem;
                font-weight: 600;
                .text-2{
                    font-weight: 400;
                }
                span{
                    font-weight: 200;
                }
            }
        }
        .button{
            width: 24rem;
            padding: 1.1rem 0;
            margin: 0 auto;
            
            margin-top: 3rem;
            margin-bottom: 4rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
        }
    }
`
const Topseller = styled.div`
    text-align:center;
    color: #fff;
   
    svg{
        vertical-align: middle;
    }
    .text{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        @media only screen and (max-width: ${bpSmall}) {
            width: 100%;
        }
    }
    .sellers__btn{
        margin-top: 6rem;
        width: 23rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
    }
`
const ListSeller = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem,1fr));
    gap: 3.5rem;
    margin-top: 4rem;
   
`
const Seller = styled.div`
    display: flex;
    align-items: center;
    border: 2;
    position: relative;
    border-radius:1rem;
    padding: 2.7rem 3rem;
    &::before{
        content: "";
        position: absolute;
        inset: 0; //top, right, left, botton: 0;
        padding: 2px;
        border-radius: 3rem;
        background: linear-gradient(170deg, rgba(255, 255, 255, .4), rgba(255, 255, 255, 0.05));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
    .avatar{
        width: 7rem;
        height: 7rem;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 1.7rem;
    }
    .user{
        margin-right: auto;
        text-align: left;
    }
    .index,.username{
        font-weight: 700;
         font-size: 2rem;
    }
    .ether{
        font-size: 1.4rem;
        font-weight: 300;
        margin-top: 1.4rem;

        svg{
            margin-top: -6px;
        }
    }
    .fluctuating{
        height: 3.6rem;
        width: 10rem;
        border-radius: 18px;
        position: relative;
        
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &::before{
            content: "";
            position: absolute;
            inset: 0; //top, right, left, botton: 0;
            padding: 2px;
            border-radius: 3rem;
           
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
        }
        &.increased{
            color: #00FF66;
            background: rgba(0, 179, 71, 0.15);
            &::before{
                background: linear-gradient(-90deg,#00B247 , rgba(73, 182, 73, .3) 80%);
            }
        }
        &.decreased{
            background:  rgba(235, 20, 20, 0.15);
            color: #FF0000;
            &::before{
                background: linear-gradient(-90deg, rgb(178, 0, 0), rgba(182, 73, 73, .3) 80%);
            }
        }
    }
    
`
const WhatIsNFT = styled.div`
    background-image: url(${bgwhatisNFT});
    background-repeat: none;
    background-position: center;
    background-size: cover;
    margin-left: -10rem;
    position: relative;
    width: 100vw;
    height: 55.7rem;
    @media only screen and (max-width: ${bpMedium}) {
        height: 30rem;
        margin-left: -5rem;
    }
    .card{
        max-width: 58rem;
        position: absolute;
        right: 14rem;
        bottom: -10rem;
        z-index: 1;
        border: 2px solid rgba(255, 255, 255, .3);
        @media only screen and (max-width: ${bpMedium}) {
            width: 33.5rem;
            /* left: 0rem; */
            right: calc(50% + 0.625rem);
            transform: translateX(50%);
        }
        .content{
            padding: 6rem 7rem;
            text-align: left;
            @media only screen and (max-width: ${bpMedium}) {
                padding: 3rem 3rem;
            }
        }
        .heading{
            font-size: 4.4rem;
            font-weight: 800;
            margin-bottom: 1.7rem;
            @media only screen and (max-width: ${bpMedium}) {
                font-size: 2.5rem;
            }
        }
        .text-3{
            font-weight: 400;
            @media only screen and (max-width: ${bpMedium}) {
                font-size: 1.5rem;
            }
        }
        .group-btn{
            font-family: inherit;
            color: currentColor;
            margin-top: 4rem;
            font-weight: 700;
            svg{
                vertical-align: middle;
                margin-top: -3px;
                fill: #fff;
            }
            .link{
                &:first-child{
                    margin-right: 2rem;
                }
            }
        }
    }
`
const Subscribe = styled.div`
    margin-top: 24rem;
    padding-bottom: 10rem;
    display: flex;
    gap: 7rem;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    @media only screen and (max-width: ${bpMedium}) {
        flex-direction: column-reverse;
    }
    .wrapperimg{
        flex: 0 0 50%;
    }
    .img{
        width: 100%;
        height: 29rem;
        object-fit: cover;
        border-radius: 5px;
    }
    .content{
        
        .heading-2{
            font-family: 'Orbitron',sans-serif;
        }
        .text-3{
            font-family: 'Spartan',sans-serif;
            margin-top: 2.8rem;
            margin-bottom: 4rem;
        }
        .form{
            display: flex;
            gap: .5rem;
            .input{
                padding: 0 1.6rem;
                font-family: 'Spartan',sans-serif;
                outline: none;
                border:none;
            }
            .btn{
                width: 14rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`
export {
    HomeWrapper,
    BannerWrapper,
    Content,
    SlidersWrapper,
    SliderImg,
    PartnerWapper,
    PartnerItem,
    TopNFTWrapper,
    TopItem,
    Detail,
    Explore,
    HeadingSection,
    ExploreList,
    Collection,
    Topseller,
    ListSeller,
    Seller,
    WhatIsNFT,
    Subscribe
};
