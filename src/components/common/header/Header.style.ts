import styled from "styled-components";
import '../../../_variables.scss'
const bpLargest = '75em',//1200px
    bpLarge = '68.75em', //1100px
    bpMedium = '48em', //900px
    bpSmall = '37.5em', //600px
    bpSmallest = '41.25em'; //660px

const HeaderWrapper = styled.div`
    @media only screen and (max-width: ${bpMedium}) {
        position: fixed;
        inset: 0;
        width: 100vw;
        padding: 3rem 5rem;
        /* right: 5rem; */
        /* left: 5rem; */
        z-index: 2000000;
        pointer-events: none;
    }
    .nav{
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.6);
        line-height: 1;
        &__item{
            cursor: pointer;
            transition: all .2s;
            @media only screen and (max-width: ${bpMedium}) {
                display: none;
            }
            &:nth-child(4){
                margin-right: auto;
            }
            &:first-child{
                margin-right: 25rem;
                @media only screen and (max-width: ${bpLarge}) {
                    margin-right: auto;
                }
                @media only screen and (max-width: ${bpMedium}) {
                    display: flex;
                    z-index: 2000;
                }
            }
            &:nth-child(3){
                margin: 0 7rem;
                @media only screen and (max-width: ${bpLarge}) {
                    margin: 0 3.5rem;
                }
            }
            &:nth-child(5){
                margin-right:4rem;
                @media only screen and (max-width: ${bpLarge}) {
                    margin-right: 2rem;
                }
            }
            svg{
                fill: #fff;
            }
            &:hover{
                color: #fff;
            }
        }
        &__link:link,
        &__link:visited{
            text-decoration: none;
            color: currentColor;
        }
        &__img{
            width: 20px;
            vertical-align: bottom;
        }
        .humberger{
            &__icon{
                z-index: 1000;
                position: relative;
                cursor: pointer;
                
                &,
                &::before,
                &::after{
                    content: "";
                    height: 3px;
                    width: 3rem;
                    background-color: #fff;
                    border-radius: 1rem;
                    display: inline-block;
                    transition: all .2s;
                }
                &::before,
                &::after{
                    position: absolute;
                    right:0;    
                }
                &::before{
                    top: 9px;
                    width: 2rem;   
                }
                &::after{
                    top: 18px;
                }
            }
            &__button{
                cursor: pointer;
                pointer-events: all;
                display: none;
                @media only screen and (max-width: ${bpMedium}) {
                    display: block;
                }
            }
            &__button:hover .humberger__icon::before{
                width: 3rem;
                background-image: linear-gradient(272.38deg, #43A5E3 46.06%, #FF56F6 81.53%);
            }
            &__button:hover .humberger__icon::after{
                width: 2rem;
                background-image: linear-gradient(272.38deg, #43A5E3 46.06%, #FF56F6 81.53%);
            }
            &__button:hover .humberger__icon{
                width: 2rem;
                background-image: linear-gradient(272.38deg, #43A5E3 46.06%, #FF56F6 81.53%);
            }
        }
        .nav--mobile{
            position: absolute;
            top: -2rem;
            bottom: -2rem;
            right: -5rem;
            left: -5rem;
            list-style: none;
            transition: all .3s cubic-bezier(.99,0,.07,1.08);
            opacity: 0;
            z-index: -1000;
            height: 100vh;
            overflow: hidden;
            pointer-events: none;
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            @media only screen and (max-width: ${bpMedium}) {
                display: flex;
            }
            &::before{
                content:"";
                background: #fff;
                transition: all .5s;
                background: rgba(32,8,59,1);
                clip-path: circle(50% at 50% 50%);
                position: absolute;
                /* inset: 0; */
                transform: scale(1);
                width: 2rem;
                height: 2rem;
                right: 5rem;
                top: 2rem;
                z-index: -1;
            }
            &__item{
                margin: 1rem 0;
                
                
            }
            &__link{
                background-image: linear-gradient(272.38deg, #43A5E3 46.06%, #FF56F6 81.53%);
                display: inline-block;
                padding: 2rem 3rem;
                width: 20rem;
                &:hover{
                    color: #fff;
                }
            }
            .group-btn{
                display: flex;
                svg{
                    fill:  #ffffff99;
                    transition: all .3s;
                    &:hover{
                        fill: #fff;
                    }
                }

            }
        }
        input[type=checkbox]{
            display: none;
        }
        input[type=checkbox]:checked + .humberger__button .humberger__icon{
            transform-origin: right;
            transform: rotate(-35deg);
            width: 3rem;
        }
        input[type=checkbox]:checked + .humberger__button .humberger__icon::before{
            background: transparent;
            
        }
        input[type=checkbox]:checked + .humberger__button .humberger__icon::after{
            transform-origin: right ;
            right: 0;
            transform: rotate(70deg) translate(-9px,5px);
            width: 3rem;

        }
        input[type=checkbox]:checked ~ .nav--mobile{
            /* transform: scale(20) */
            /* transform: translateX(0); */
            opacity: 1;
            z-index: 2;
            pointer-events: all;
        } 
        input[type=checkbox]:checked ~ .nav--mobile::before{
            transform: scale(150)
        } 
    }
    
    
    
`

export {
    HeaderWrapper
}