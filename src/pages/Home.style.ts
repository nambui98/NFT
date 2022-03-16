import styled from 'styled-components';
import bg_item from '../assets/img/bg_item.svg'
import img1 from '../assets/img/img_slider-1.png'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 11.6rem;
    
`
const Content = styled.div`
    flex: 0 0 60%;
`
const SlidersWrapper = styled.div`
    flex: 1;
    filter: drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) drop-shadow(0px .4rem .2rem rgba(0, 0, 0, 0.25)) ;
    border-radius: 17.6873px;
    .slider{
       &__item{
           position: relative;
       }
       &__inforwrapper{
           position: absolute;
           bottom: -10rem;
           left: 14rem;
       }
       &__info{
           position: relative;
           height: 18.1rem;
           width: 33.6rem;
           background: linear-gradient(135deg, rgba(255, 255, 255, 0.18)  0%, rgba(255, 255, 255, 0)  100%);
           backdrop-filter: blur(20px);
           border-radius: 5px;
           clip-path: polygon(0 4.5rem,  4.5rem 0, 100% 0, 100% 100%, 0 100%);
           z-index: 0;
           border-top-left-radius:55px;
           color: #fff;

           display: flex;
           /* gap: 2rem; */
        &::before {
            content: "";
            position: absolute;
            top: .3rem;
            left: .3rem;
            height: 17.5rem;
            width: 33rem;
            z-index: 2;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) -1.52%, rgba(255, 255, 255, 0.024) 104.35%);
            border-radius: 5px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(80px);
            -webkit-backdrop-filter: blur(60px);
            border-top-left-radius:55px;
            clip-path: polygon(0 4.5rem,  4.5rem 0, 100% 0, 100% 100%, 0 100%);
        }
       }
       &__avatar{
           width: 3rem;
           height: 3rem;
           /* object-fit: contain; */
           border-radius: 50%;
       }
       &__left{
         flex: 0 0 50%;
       }
       &__right{
           flex: 1;
       }
    }
`
const SliderImg: any = styled.div`
    /* display: inline-block; */
    width: 40rem;
    height: 47.7rem;
    filter: url('#goo');
    &::before {
        content: "";
        display: block;
        padding-top: 100%;
        height: 100%;
        background-image: url(${({ image }: any) => image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        clip-path: polygon(0 6rem,  10rem 0, 100% 0, 100% 100%, 0 100%);
    }
`
export { HomeWrapper, Content, SlidersWrapper, SliderImg }