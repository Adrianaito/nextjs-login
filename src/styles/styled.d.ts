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
            primary: string,
            secondary: string,

            background: string,
            text: string
        }
    }
}
