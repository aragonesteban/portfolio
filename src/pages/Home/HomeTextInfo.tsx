import React from 'react'
import { HomeTextInfoCheer, HomeTextInfoContainer, HomeTextInfoIntroducing, HomeTextInfoProfession } from './styles'

const HomeTextInfo: React.FC = () => {
    return (
        <HomeTextInfoContainer>
            <br/>
            <div>
                <HomeTextInfoCheer>Hey there,</HomeTextInfoCheer>
                <HomeTextInfoCheer>I'm Esteban</HomeTextInfoCheer>
                <HomeTextInfoProfession>Senior Mobile Developer</HomeTextInfoProfession>
            </div>
            <HomeTextInfoIntroducing>I develop high-quality mobile apps that exceed user expectations.</HomeTextInfoIntroducing>
        </HomeTextInfoContainer>
    )
}

export default HomeTextInfo