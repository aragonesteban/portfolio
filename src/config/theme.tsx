export const lightTheme: Theme = {
    backgroundColor: '#FFF',
    textColor: "#000",
    switch: {
        backgroundColor: "#FFF",
        trasnform: "translateX(0%)",
        text: "🌚"
    },
    shadowColor: "rgba(0, 0, 0, 0.10)",
    isDarkTheme: false
}

export const darkTheme: Theme = {
    backgroundColor: '#151820',
    textColor: "#FFF",
    switch: {
        backgroundColor: "#212636",
        trasnform: "translateX(90%)",
        text: "🌝"
    },
    shadowColor: "rgba(178, 178, 178, 0.10)",
    isDarkTheme: true
}

export enum ThemesType {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

export interface Theme {
    backgroundColor: string
    textColor: string
    switch: SwitchTheme
    shadowColor: string
    isDarkTheme: boolean
}

interface SwitchTheme {
    backgroundColor: string
    trasnform: string
    text: string
}