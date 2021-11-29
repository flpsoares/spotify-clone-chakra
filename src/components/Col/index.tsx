import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

const Col: React.FC<BoxProps> = ({ ...rest }) => {
  return <Box display="flex" flexDir="column" {...rest} />
}

export default Col
