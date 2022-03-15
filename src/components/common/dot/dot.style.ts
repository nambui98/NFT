import styled from 'styled-components';

const DotWrapper = styled.div`
    width: ${({ size }: any) => size || '27.2rem'};
    height:${({ size }: any) => size || '27.2rem'};
    background-color: ${({ bg }: any) => bg || '#FF00C8'};
    border-radius: 50%;
    position: absolute;
    top: ${({ top }: any) => top || '55.1rem'};
    left: ${({ left }: any) => left || '3.6rem'};
    filter:blur(150.612px);
`;


export {
    DotWrapper
}