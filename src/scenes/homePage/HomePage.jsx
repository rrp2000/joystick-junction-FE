import Navbar from 'scenes/navbar/Navbar'
import React, { useEffect } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import UserWidget from 'scenes/widgets/UserWidget'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const {id, picture} = useSelector((state) => state.user);

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  
  return (
    <Box>
      <Navbar />
      <Box 
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={id} picturePath={picture}/>
        </Box>
        <Box 
          flexBasis={isNonMobileScreens ? "26%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >

        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%"> 
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
