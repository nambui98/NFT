import styled from 'styled-components';

const ButtonWapper = styled.button`
    filter: drop-shadow(0px 4.42184px 107.23px rgba(255, 86, 246, 1.51));
    position: relative;
    border-radius: 0.3rem;
    height: 6.4rem;
    width: 25rem;
    background-image: linear-gradient(90deg,#FFA6FA, #3C79D4);
    transition: .3s all;
    .btn__img{
        clip-path: polygon(0 0,20.1rem 0, 100% 2rem, 100% 100%,4.4rem 100%,0 4rem );
        border-radius: 0.3rem;
        background-image: linear-gradient(92.23deg, #FF56F6 21.43%, #B936EE 50.63%, #3BACE2 100%, #406AFF 117.04%);
        width: 24.6rem;
        height: 6rem;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        position: absolute;
        top: .2rem;
        left: .2rem ;
        z-index: -1;
    }
`

export { ButtonWapper }