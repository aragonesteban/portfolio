export const lightTheme: Theme = {
    textColor: "#000",
    switch: {
        backgroundColor: "#FFF",
        trasnform: "translateX(0%)",
        text: "🌚"
    }
}

export const darkTheme: Theme = {
    textColor: "#FFF",
    switch: {
        backgroundColor: "#212636",
        trasnform: "translateX(90%)",
        text: "🌝"
    }
}

export enum ThemesType {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

export interface Theme {
    textColor: string
    switch: SwitchTheme
}

interface SwitchTheme {
    backgroundColor: string
    trasnform: string
    text: string
}