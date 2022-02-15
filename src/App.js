
import styled from "@emotion/styled"
import { Grid, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React,{useState} from "react"

function App() {
  return (
    <React.Fragment>
      <Div>
        <Typography variant="h5">Happy Birthday Litha 🎂 </Typography>
      </Div>
    </React.Fragment>
  );
}

const Div = styled.div({
  display:`flex`,
  justifyContent:`center`,
  alignItems:'center',
  height:'100vh'
})

export default App;
