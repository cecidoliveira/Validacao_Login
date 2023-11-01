import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 40%;
    height: 42px;
    background-color: #575A89;
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    cursor:pointer;
    border: 1px solid #575A89;
    border-radius: 21px;

    &:disabled{
        opacity: 0.6;
        cursor: auto;
    }

`