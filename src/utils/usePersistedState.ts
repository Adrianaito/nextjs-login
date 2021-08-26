import { useState, useEffect } from 'react'
import cookie from "js-cookie"

import { lightTheme } from '../styles/Themes/light'
import { darkTheme } from '../styles/Themes/dark'


function usePersistedState(key: string, initialState: any) {
    const [state, setState] = useState(() => {
        // const storageTheme = localStorage.getItem(key);
        const storageTheme = cookie.get(key)
        console.log("storage theme:", storageTheme)

        if (storageTheme == "light") {
            console.log("cookies:", storageTheme)

            return lightTheme
        } else if (storageTheme == "dark") {
            return darkTheme;
        } else {
            return initialState
        }
    });

    useEffect(() => {
        cookie.set(key, state.title, { expires: 1 / 24 })
        // localStorage.setItem(key, state.title);
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;

