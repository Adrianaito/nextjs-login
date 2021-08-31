import { ThemeProvider } from 'styled-components'
import React, { useEffect, useState } from 'react'
import usePersistedState from '../utils/usePersistedState'
import useDarkMode from 'use-dark-mode'
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from '../styles/global'
import { NavigationBar } from '../components'
import { AuthProvider } from "../contexts/AuthContext"

import { lightTheme } from '../styles/Themes/light'
import { darkTheme } from '../styles/Themes/dark'



const MyApp = ({ Component, pageProps }) => {

    const [theme, setTheme] = usePersistedState('theme', lightTheme);

    const [isMounted, setIsMounted] = useState(false)

    // FOR DARK MODE LIBRARY:
    // const darkMode = useDarkMode(true)
    // const theme = darkMode.value ? dark : light

    useEffect(() => {
        setIsMounted(true)
        // localStorage.getItem("darkMode")
        // cookie.get("theme")
    }, [])

    const toggleTheme = () => {
        setTheme(theme.title == "light" ? darkTheme : lightTheme);
        // darkMode.toggle()
    }
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                {isMounted &&
                    <>
                        <NavigationBar toggleTheme={toggleTheme} brand="Hello Chouri" />
                        <Component {...pageProps} />
                    </>
                }
                <GlobalStyle />
            </AuthProvider>
        </ThemeProvider>
    )

}
export default MyApp

