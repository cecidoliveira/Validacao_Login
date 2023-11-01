import styled from 'styled-components';


export const InputContainer = styled.div<{ $valid?: boolean; }>`
    width: 80%;
    height: 42px;
    color: #FFF;

    border: 1px solid;
    border-color: ${props => props.$valid ? "#575A89" : "red"};
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
        margin-left: 1rem;
    }

`
export const MenssageErro = styled.p`
    color: red;
    font-size: 1.3rem;
    font-weight: 600;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size:12px;
    margin-top:8px;
    margin-left:10px;
`
