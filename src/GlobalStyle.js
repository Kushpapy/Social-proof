import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
 & {
--Very-Dark-Magenta: hsl(300, 43%, 22%);
--Soft-Pink: hsl(333, 80%, 67%);
--Dark-Grayish-Magenta: hsl(303, 10%, 53%);
--Light-Grayish-Magenta: hsl(300, 24%, 96%);
--White: hsl(0, 0%, 100%);
}
}

*,::after,::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 62.5%;
}



body{
    height: 100vh;
    font-family: "League Spartan", sans-serif;
    background-image: url("/bg-pattern-top-desktop.svg"),url("/bg-pattern-bottom-desktop.svg");
    background-repeat: no-repeat;
    background-color: var(--White);
    background-position: left top,right bottom;
   
}

#root{
    height: inherit;
}

`;

export default GlobalStyle;
