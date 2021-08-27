/* eslint @typescript-eslint/no-empty-interface: "off" */

import "styled-components";
import theme from "./theme";

export type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            default: {
                text: string,
                background: string
            },
            primary: {
                text: string,
                background: string
            },
            secondary: {
                text: string,
                background: string
            },
            disabled: {
                text: string,
                background: string,
            },
            danger: {
                text: string,
                background: string
            },
            success: {
                text: string,
                background: string
            },
            warning: {
                text: string,
                background: string
            },
            info: {
                text: string,
                background: string
            },
            border: string,
            active: string
        }
    }
}
