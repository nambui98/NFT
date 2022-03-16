import styled from 'styled-components';
import bg from '../../assets/img/bg.jpg'
const MainlayoutWrapper = styled.div`
    background-color: #01204C;
    /* height: 100vh; */
    padding: 4rem 10rem;
    & > *{
        backdrop-filter: blur(0);
    }
`
const Bg = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* filter: blur(50px); */
    position: absolute;
    width: 2060px;
    height: 8717px;
    left: -227px;
    top: -100px;
`
const Bg2 = styled.div`
position: absolute;
width: 100%;
height: 6824px;
left: 0px;
top: 0px;
background: rgba(32, 8, 59, 0.75);
backdrop-filter: blur(184.612px);

`
export { MainlayoutWrapper, Bg, Bg2 }