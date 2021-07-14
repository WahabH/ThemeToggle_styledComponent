import React, { useState } from "react";
import {lightTheme, darkTheme, GlobalStyles} from "./themes"
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
width: 100%;
display:flex ;
justify-content: center;
background-color: ${(props)=>props.theme.body};
font-size: 50px;
color: ${(props)=>props.theme.fontColor};
transition-duration: 2s;
`;
const Button = styled.button`
width: 200px;
height: 50px;
border-radius: 5px;
color: ${(props)=>props.theme.fontColor};
background-color: ${(props)=>props.theme.body};
border-color: ${(props)=>props.theme.fontColor};
transition-duration: 2s;
margin: 25px auto;
display: block;
`
function App() {

const [theme, setTheme]= useState("light")
const toggleTheme = () => {
  theme === 'light' ? setTheme("dark" ) : setTheme('light')
}


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
       <div>Theme Toggle</div> 
    
     </StyledApp>
     <Button onClick={()=> toggleTheme()}>Click to Toggle</Button>
    </ThemeProvider>
  );
}

export default App;
