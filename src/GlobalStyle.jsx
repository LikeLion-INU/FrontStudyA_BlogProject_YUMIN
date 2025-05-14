import { createGlobalStyle } from 'styled-components';
// import backgroundImg from './assets/background.JPG'; 

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-image: url('/background.jpg'); 
        background-repeat: repeat;
        background-size: auto;
        font-family: sans-serif;
    }
`;

export default GlobalStyle;
