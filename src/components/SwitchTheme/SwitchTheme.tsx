import React from 'react'
import { useTheme } from 'styled-components'
import { SwitchContainer, SwitchOption } from './styles'

interface SwitchThemeProps {
    themeToggler: () => void
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ themeToggler }) => {
    const theme = useTheme()

    return (
        <SwitchContainer onClick={themeToggler}>
            <SwitchOption>
                {theme.switch.text}
            </SwitchOption>
        </SwitchContainer>
    )
}

export default SwitchTheme
