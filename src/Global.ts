import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`   
    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
    }
    :root body {
        background-color: #575A89;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        height: 100%;
    }
`;