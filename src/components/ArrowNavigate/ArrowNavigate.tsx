import React from 'react'
import { ArrowNavigateContainer } from './stylex'
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useTheme } from 'styled-components';

const ArrowNavigate: React.FC = () => {
  const theme = useTheme()
  return (
    <ArrowNavigateContainer>
         <ArrowForward color={theme.textColor} fontSize="large"/>
    </ArrowNavigateContainer>
  )
}

export default ArrowNavigate