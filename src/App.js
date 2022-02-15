
import styled from "@emotion/styled"
import {keyframes} from "@emotion/react"
import { Button, Grid, Typography } from "@mui/material";
import React,{useEffect, useState} from "react"
import Card from "./component/Card";
import Carousel from "./component/Carousel";



function App() {
  const [intro,setIntro] = useState(false)
  const [page,setPage] = useState(false)
  useEffect(()=>{
    setTimeout(()=>setIntro(true),5000)
  },[])

  const Splash = ()=> {
    return(
      <>
      <Typography sx={{position:'absolute',top:'43%'}} variant="h5">Happy Birthday Litha 🎂 </Typography>
        {
          !intro ? null
          : <BUTTON color="primary" onClick={()=>setPage(true)}>See Memories</BUTTON>
        }
      </>
    )
  }
  
  return (
    <React.Fragment>
      <Div>
        {
          !page ? <Splash/> : <Carousel/>
        }
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
  animation:`${fadeIn} 3s linear 1`,
  backgroundColor:`#FBF8F1`
})

const BUTTON = styled(Button)({
  animation:`${fadeIn} 2s linear 1`,
})



export default App;
