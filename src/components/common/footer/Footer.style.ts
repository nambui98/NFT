import styled from 'styled-components';
const bpLargest = '75em',//1200px
    bpLarge = '68.75em', //1100px
    bpMedium = '56.25em', //900px
    bpSmall = '48em', //768px
    bpSmallest = '41.25em'; //660px
const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 8rem;
    gap: 8rem;
    @media only screen and (max-width: ${bpMedium}) {
        flex-direction: column;
        gap: 0rem;
        padding-top: 3rem;
    }
    .column{
        flex: 0 0 calc((100% - 20% - 32rem) / 6);
        color: #fff;
        transform: translateY(0);
        @media only screen and (max-width: ${bpMedium}) {
            cursor: pointer;
        }
        &:first-child{
            flex: 0 0 20%;
        }
        &:nth-child(2){
            @media only screen and (max-width: ${bpMedium}) {
                margin-top: 3rem;
            }
        }
        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            margin-top: 1.8rem;
            transition: all .3s;
            @media only screen and (max-width: ${bpMedium}) {
                height: 0;
                opacity: 0;
                margin: 0;
                gap: 1rem;
            }
        }
        li{
            font-size: 1.6rem;
            cursor: pointer;
        }
        &.active{
            @media only screen and (max-width: ${bpMedium}) {

                ul{
                    height: 100%;
                    opacity: 1;
                    transform: translateY(1.8rem);
                    margin-bottom: 1.8rem;
                }
            }

        }
    }
    .copyright{
        padding-top: 10rem;
        border-top: 1px solid rgba(255, 255, 255, .2);
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
        @media only screen and (max-width: ${bpSmallest}) {
            padding-top: 5rem;
            flex-direction: column-reverse;
            align-items: center;
            gap: 2rem;
        }
        ul{
            list-style: none;
            display: flex;
            gap: 2rem;
        }
    }
    .link{
        font-weight: 700;
        img{
            vertical-align: middle;
            margin-top: -5px;
        }
    }
    .text{
        margin-top: 2.5rem;
    }
    .listsocial{
        display: flex;
        gap: 1.7rem;
        margin-top: 2.5rem;
        svg{
            fill: #fff;
        }
        .btn-icon{
            height: 2.7rem;
            width: 2.7rem;
            border: none;
            background: rgba(255, 255, 255, .3);
            border-radius: 50%;
            cursor: pointer;
            transition: all .3s;

            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                background: rgba(255, 255, 255, .4);
            }
        }

    }
    .dropdown{
        svg{
            display: none;
        }
        @media only screen and (max-width: ${bpMedium}) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.6rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
            svg{
                transition: all .3s;
                display: block;
            }
            &:hover svg{
                stroke: #fff;
            }
        }
        
    }
`

export { FooterWrapper }