
import styled from "@emotion/styled"
import {keyframes} from "@emotion/react"
import { Grid, Typography } from "@mui/material";
import React,{useState} from "react"

function App() {
  return (
    <React.Fragment>
      <Div>
        <Typography variant="h5">Happy Birthday Litha 🎂 </Typography>
        {/* <Typography variant="p">Wish you all the best </Typography> */}
      </Div>
    </React.Fragment>
  );
}
const fadeIn = keyframes`
    0% { opacity: 0; }
    100%   { opacity: 1; }
`

const Div = styled.div({
  display:`flex`,
  justifyContent:`center`,
  alignItems:'center',
  height:'100vh',
  flexDirection:'column',
  animation:`${fadeIn} 1s linear 1`
})


export default App;
