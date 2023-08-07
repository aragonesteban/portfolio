import React from 'react'
import { NavBarItemContainer, NavBarItemIndicator } from './styles';

interface NavBarItemProps {
    title: string;
    isSelected: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ title, isSelected }) => (
    <NavBarItemContainer $isSelected={isSelected}>
        <span>{title}</span>
        {isSelected && <NavBarItemIndicator />}
    </NavBarItemContainer>
)

export default NavBarItem