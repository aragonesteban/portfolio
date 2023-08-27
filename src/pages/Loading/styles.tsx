import { styled } from "styled-components";

export const LoadingContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background: ${({ theme }) => theme.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingCounter = styled.span`
    font-weight: bolder;
    font-size: 9em;
    animation: springAnimation 2s infinite linear;
    color: ${({ theme }) => theme.textColor};

    @keyframes springAnimation {
        0%, 100% {
            transform: scale(1);
        }
        20%, 80% {
            transform: scale(1.1);
        }
        40%, 60% {
            transform: scale(1);
        }
    }
`