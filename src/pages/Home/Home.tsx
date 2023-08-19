import React from 'react'
import { HomeContainer } from './styles'
import HomeTextInfo from './HomeTextInfo'
import HomeGrafics from './HomeGrafics'

const Home: React.FC = () => (
  <HomeContainer>
    <HomeTextInfo />
    <HomeGrafics />
  </HomeContainer>
)

export default Home