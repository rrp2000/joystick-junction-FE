import React from 'react'
import { Box } from '@mui/material'

const UserImage = ({image, size = "60px"}) => {
  return (
    <Box width={size} height={size}>
        <img
            className='profileImage'
            width={size}
            height={size}
            alt='user'
            style={{ objectFit: "cover", borderRadius: "50%"}}
            src={`data:image/jpeg;base64,` + image}
        />
     </Box>
  )
}

export default UserImage
