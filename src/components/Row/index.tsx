import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

const Row: React.FC<BoxProps> = ({ ...rest }) => {
  return <Box display="flex" flexDir="row" {...rest} />
}

export default Row
