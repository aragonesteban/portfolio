import { useEffect, useState } from 'react';
import { ThemesType } from '../config/theme'

export const useDarkMode = (): [ThemesType, () => void] => {
    const [theme, setTheme] = useState<ThemesType>(ThemesType.LIGHT);

    const setMode = (mode: ThemesType): void => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = (): void => {
        theme === ThemesType.DARK ? setMode(ThemesType.LIGHT) : setMode(ThemesType.DARK)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        const themeTypeValue = ThemesType[localTheme?.toUpperCase() as keyof typeof ThemesType];
        themeTypeValue && setTheme(themeTypeValue)
    }, []);

    return [theme, themeToggler];
};