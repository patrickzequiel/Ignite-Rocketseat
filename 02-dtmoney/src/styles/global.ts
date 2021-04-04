import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #463F5F;
        --text-boby: #969CB3;

        --background: #F0F2F5;
        --shape: #FFFFFF;
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smooting: antialiased;
    }

    html{
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }
        
    button{
        cursor: pointer;
    }


    [disabled] {
        opacity: 0.6px;
        cursor: not-allowed;
    }
`