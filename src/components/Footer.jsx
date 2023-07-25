import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

import Logo from "../assets/images/Logo-1.png"

const Footer = () => {
  return (
    <Box mt={"80px"} bgcolor={"#fff3f4"}>
      <Stack gap={"40px"} alignItems={"center"} px={"40px"} py={"24px"}>
        <img src={Logo} alt="" width={"200px"} height={"48px"} />
      </Stack>
    </Box>
  )
}

export default Footer
