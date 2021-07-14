import { createGlobalStyle } from "styled-components";


export const lightTheme = {
    body: "white",
    fontColor: "black" 
};



export const darkTheme = {
    body: "#333333" ,
    fontColor: "white"
};

export const GlobalStyles = createGlobalStyle`
 body {
     background-color: ${(props)=> props.theme.body};
     transition-duration: 2s;
 }
`