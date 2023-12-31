import { styled } from "styled-components";

export const NavBarContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    @media only screen and (max-width: 480px) {
        position: unset;
        padding: 2em 0;
    }
`

interface NavBarItemContainerProps {
    $isSelected: boolean
}

export const NavBarItemContainer = styled.div<NavBarItemContainerProps>`
    margin: 0 2em;
    font-size: 20px;
    font-weight: ${({ $isSelected }) => $isSelected ? '900' : '400'};
    text-align: center;
    height: 50px;
    padding: 2em 0;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`

export const NavBarItemIndicator = styled.div`
    width: 10px;
    height: 10px;
    background-color: #7BDAF8;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 8px;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`