import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;

        * {
                margin: 0;
                padding : 0;
                box-sizing : border-box;
            }

        body {
            font-family: 'Oswald', sans-serif;

            h1 {
                font-size: 5rem;
            }

            h2 {
                font-size : 3rem;
            }

            h3 {
                font-size : 2rem;
            }

            p {
                font-size: 1.5rem;
            }
        }
    }
`;

export default GlobalStyle;
