import React from 'react'
import { ThemesType } from '../../config/theme';
import { NavBarContainer } from './styles';
import NavBarItem from './NavBarItem';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

interface NavBarProps {
  themeToggler: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ themeToggler }) => {
  return (
    <NavBarContainer>
      <NavBarItem title='Home' isSelected />
      <NavBarItem title='About' isSelected={false} />
      <NavBarItem title='Work' isSelected={false} />
      <SwitchTheme themeToggler={themeToggler} />
    </NavBarContainer>
  )
}

export default NavBar