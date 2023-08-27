import styled from "styled-components";

export const ArrowNavigateContainer = styled.div`
    padding: 1em;
    position: absolute;
    top: 12px;
    right: 5px;
    animation: springAnimation 2s infinite linear;
    cursor: pointer;

    @media only screen and (min-width: 768px) {
        margin-bottom: 24px;
        top: unset;
        bottom: 0;
    }

    @keyframes springAnimation {
        0%, 100% {
            transform: translateX(0);
        }
        20%, 80% {
            transform: translateX(-10px);
        }
        40%, 60% {
            transform: translateX(-5px);
        }
    }
`