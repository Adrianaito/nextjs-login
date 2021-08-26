import { ThemeProvider } from 'styled-components'
import React, { useEffect, useState } from 'react'
import usePersistedState from '../utils/usePersistedState'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from '../styles/global'
import Header from '../components/Header'

import { lightTheme } from '../styles/Themes/light'
import { darkTheme } from '../styles/Themes/dark'



const MyApp = ({ Component, pageProps }) => {

    const [theme, setTheme] = usePersistedState('theme', lightTheme);

    const [isMounted, setIsMounted] = useState(false)

    // FOR USE DARK MODE LIBRARY
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

            {isMounted &&
                <>
                    <Header toggleTheme={toggleTheme} />
                    <Component {...pageProps} />
                </>
            }
            <GlobalStyle />
        </ThemeProvider>
    )

}
export default MyApp

