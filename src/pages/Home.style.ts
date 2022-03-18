import styled from 'styled-components';
import bg_item from '../assets/img/bg_item.svg'
import img1 from '../assets/img/img_slider-1.png'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 11.6rem;
    
`
const Content = styled.div`
    flex: 0 0 60%;
`
const SlidersWrapper = styled.div`
    flex: 1;
    filter: drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) ;
    border-radius: 1.8rem;
    display: flex;
    width: 100%;
    margin-left: 7rem;
    justify-content: center;
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
            /* align-items: center; */
           
            /* background: rgba(0, 0, 0, 0.1); */
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
const SliderImg: any = styled.div`
    /* display: inline-block; */
    width: 40rem;
    height: 47.7rem;
    margin-bottom: 10rem;
    filter: url('#goo');
    &::before {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        padding-top: 100%;
        /* height: 100%; */
        background-image: url(${({ image }: any) => image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        clip-path: polygon(0 6rem,  10rem 0, 100% 0, 100% 100%, 0 100%);
    }
`
export { HomeWrapper, Content, SlidersWrapper, SliderImg }