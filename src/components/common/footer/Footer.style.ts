import styled from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 8rem;
    gap: 8rem;
    
    .column{
        flex: 0 0 calc((100% - 20% - 32rem) / 6);
        color: #fff;

        /* max-width: calc(100% / 6); */
        &:first-child{
            flex: 0 0 20%;
        }
        ul{
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            margin-top: 1.8rem;
        }
        li{
            font-size: 1.6rem;
            cursor: pointer;
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
            &:hover{
                background: rgba(255, 255, 255, .4);
            }
        }
        
    }
`

export { FooterWrapper }