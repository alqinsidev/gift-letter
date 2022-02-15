import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

export default function Card() {
  return (
      <>
        <Container>
            <Body variant='body1'>Selamat ulang tahun ya litha</Body>
        </Container>
      </>
  )
}

const Container = styled.div({
    display:'flex',
    width:`80%`,
    height:`50vh`,
    border:`3px solid #a2a2a2`,
    borderRadius:`10px`,
})

const Body = styled(Typography)({
    padding:30
})