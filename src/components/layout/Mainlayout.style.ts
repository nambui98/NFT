import styled from 'styled-components';
import bg from '../../assets/img/bg.jpg'
const MainlayoutWrapper = styled.div`
    background-color: #01204C;
    height: auto;
    padding: 4rem 10rem;
    position: relative;
    & > *{
        backdrop-filter: blur(0);
    }
`
const Bg = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 2060px;
    height: 100%;
    left: -227px;
    top: -100px;
`
const Bg2 = styled.div`
    position: absolute;
    width: 100%;
    inset: 0;
    background: rgba(32, 8, 59, 0.75);
    backdrop-filter: blur(184.612px);
`
export { MainlayoutWrapper, Bg, Bg2 }