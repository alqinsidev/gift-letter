import { Typography } from '@mui/material';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Car } from 'react-responsive-carousel';
import styled from '@emotion/styled';
import G1 from '../assets/G1.png'
import G2 from '../assets/G2.png'
import G3 from '../assets/G3.png'
import G4 from '../assets/G4.png'
import G5 from '../assets/G5.png'
import G6 from '../assets/G6.png'
import G7 from '../assets/G7.png'
import G8 from '../assets/G8.png'
import G9 from '../assets/G9.png'
import G10 from '../assets/G10.png'
import G11 from '../assets/G11.png'
export default function Carousel() {
    

    const settings = {
        showThumbs:false,
        showIndicators:false,
        showStatus:false,
        autoPlay:false,
    
      }

  return (
        <CAR {...settings}>
              <div><Img src={G1}/></div>
              <div><Img src={G2}/></div>
              <div><Img src={G3}/></div>
              <div><Img src={G4}/></div>
              <div><Img src={G5}/></div>
              <div><Img src={G6}/></div>
              <div><Img src={G7}/></div>
              <div><Img src={G8}/></div>
              <div><Img src={G9}/></div>
              <div><Img src={G11}/></div>
              <div><Img src={G10}/></div>
        </CAR>
  )
  }

const CAR = styled(Car)({
    width:"90%",
})

const Img = styled.img({
    width:"80%",
})