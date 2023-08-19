import React from 'react'
import Me from '../../assets/me.png'
import {
    AndroidBox,
    FlutterBox,
    HomeGraficsContainer,
    HomeGraficsImg,
    HomeTechnologyBoxImg,
    IosBox,
    ReactBox,
    HomeTechnologiesContainer,
    HomeGraphicsIntroducing
} from './styles'
import Flutter from '../../assets/flutter.png'
import Android from '../../assets/android.png'
import Apple from '../../assets/apple.png'
import AppleDark from '../../assets/apple_dark.png'
import ReactImage from '../../assets/react.png'
import { useTheme } from 'styled-components'

const HomeGrafics: React.FC = () => {
    const theme = useTheme()
    return (
        <HomeGraficsContainer>
            <HomeGraphicsIntroducing>I develop high-quality mobile apps that exceed user expectations.</HomeGraphicsIntroducing>
            <HomeGraficsImg src={Me} alt="me" />
            <HomeTechnologiesContainer>
                <AndroidBox size="120px">
                    <HomeTechnologyBoxImg src={Android} height="60%" />
                </AndroidBox>
                <IosBox size="80px">
                    <HomeTechnologyBoxImg src={theme.isDarkTheme ? AppleDark : Apple} height="100%" />
                </IosBox>
                <FlutterBox size="100px">
                    <HomeTechnologyBoxImg src={Flutter} height="100%" />
                </FlutterBox>
                <ReactBox size="80px">
                    <HomeTechnologyBoxImg src={ReactImage} height="100%" />
                </ReactBox>
            </HomeTechnologiesContainer>
        </HomeGraficsContainer>
    )
}

export default HomeGrafics