import styled from 'styled-components';

const DotWrapper = styled.div`
    width: ${({ size }: any) => size || '27.2rem'};
    height:${({ size }: any) => size || '27.2rem'};
    background-color: ${({ bg }: any) => bg || ' rgba(255, 0, 200, .6)'};
    border-radius: 50%;
    position: absolute;
    top: ${({ top }: any) => top || '50.1rem'};
    left: ${({ left }: any) => left || '3.6rem'};
    filter:blur(150.612px);
`;


export {
    DotWrapper
}