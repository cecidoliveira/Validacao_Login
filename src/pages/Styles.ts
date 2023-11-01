import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;
export const Conteiner = styled.div`
    width: 80rem;
    height: 50rem;
    overflow: hidden;
    border-radius: 2rem;
`;
export const Tela = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 2rem;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const Imagem = styled.div`
   
    width: 80%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;
export const Column = styled.div`
    width: 80%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        width: 40%;
        padding: 0;
        width: 100%;
    }
`;
export const Title = styled.div`
    font-size: 3rem;
    font-weight: bolder;
    color: #575A89;
    text-align: center;
    padding-bottom: 1rem;
    text-transform: uppercase;
`;

