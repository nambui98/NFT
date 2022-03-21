import styled from "styled-components";

const HeaderWrapper = styled.div`
    .nav{
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.6);;
        &__item{
            cursor: pointer;
            transition: all .2s;
            &:nth-child(4){
                margin-right: auto;
            }
            &:first-child{
                margin-right: 30rem;
            }
            &:nth-child(3){
                margin: 0 7rem;
            }
            &:nth-child(5){
                margin-right:4rem;
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
    }
`

export {
    HeaderWrapper
}