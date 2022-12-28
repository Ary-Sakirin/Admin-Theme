import { createContext } from "react";

export interface ThemeProps {
    darkmode: boolean
}

export const Theme = createContext<{ theme: ThemeProps, setTheme: any }>({
    theme: {
        darkmode: false
    },
    setTheme: () => { }
})