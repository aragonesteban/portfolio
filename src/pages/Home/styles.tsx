import { styled } from "styled-components";

export const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: 40% 60%;
    height: -webkit-fill-available;
    animation: fadeInShine 2s;
    animation-fill-mode: forwards; /* Mantener el estado final después de la animación */
    animation-iteration-count: 1; /* Ejecutar la animación solo una vez */


    @media only screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        height: auto;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 50% 50%;
    }
    @media only screen and (min-width: 1024px) {
        grid-template-columns: 40% 60%;
    }

    @keyframes fadeInShine {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const HomeTextInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-left: 2em;
        align-items: start;
    }
`

export const HomeTextInfoCheer = styled.h1`
    margin: 0;
    font-size: 6em;

    @media only screen and (max-width: 480px) {
        text-align: center;
        font-size: 4em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 4em;
    }
`

export const HomeTextInfoProfession = styled.h1`
    font-size: 36px;
    font-weight: 400;

    @media only screen and (max-width: 480px) { 
        font-size: 22px;
        text-align: center;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 24px;
    }
`

export const TextInfoIntroducing = styled.span`
    font-size: 1.6em;
    margin: 0 4em;
`

export const HomeTextInfoIntroducing = styled(TextInfoIntroducing)`
    @media only screen and (max-width: 480px) { 
        display: none;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-left: 0;
        font-size: 1.2em;
    }
`

export const HomeGraphicsIntroducing = styled(TextInfoIntroducing)`
    @media only screen and (max-width: 480px) { 
        display: block;
        font-size: 1em;
        text-align: center;
        margin-top: 1em;
    }
    @media only screen and (min-width: 768px) {
        display: none;
    }
`

export const HomeGraficsContainer = styled.div`
    position: relative;

    @media only screen and (max-width: 480px) { 
        display: flex;
        flex-direction: column-reverse;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media only screen and (min-width: 1024px) {
        display: block;
    }
`

interface HomeGraficsImgProps {
    src: string;
    alt?: string;
}

export const HomeGraficsImg = styled.img<HomeGraficsImgProps>`
    height: 800px;
    position: absolute;
    bottom: 0;
    @media only screen and (max-width: 480px) {
        height: auto;
        position: unset;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        height: auto;
        position: unset;
    }
    @media only screen and (min-width: 1024px) {
        height: 540px;
        position: absolute;
    }
    @media screen and (min-width: 1025px) {
        height: 800px;
    }
`

export const HomeTechnologyBoxContainer = styled.div<{ size: string }>`
    height: ${({ size }) => size};
    width: ${({ size }) => size};
    border-radius: 18px;
    background: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0px 2px 4px 1px ${({ theme }) => theme.shadowColor};
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }

    @media only screen and (max-width: 480px) {
        position: unset;
        height: 5em;
        width: 5em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        position: unset;
        height: 5em;
        width: 5em;
    }

    @media only screen and (min-width: 1024px) {
        position: absolute;
    }
`

export const FlutterBox = styled(HomeTechnologyBoxContainer)`
    top: 20%;
    left: 45%;
`

export const AndroidBox = styled(HomeTechnologyBoxContainer)`
    top: 55%;
    left: 5%;
`

export const IosBox = styled(HomeTechnologyBoxContainer)`
    top: 25%;
    left: 15%;
`

export const ReactBox = styled(HomeTechnologyBoxContainer)`
    top: 45%;
    left: 60%;
`

interface HomeTechnologyBoxImgProps {
    src: string;
    alt?: string;
    height: string;
    width?: string;
}

export const HomeTechnologyBoxImg = styled.img<HomeTechnologyBoxImgProps>`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
`

export const HomeTechnologiesContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1em;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: auto;
    }
`