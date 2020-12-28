import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
 }

 body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased
 }

 body, input, button {
     font: 16px "Popins", sans-serif;
 }

 button {
     cursor: pointer;
 }

`;
