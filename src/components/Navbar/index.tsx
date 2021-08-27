import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch"
import { ThemeContext } from "styled-components";
import { shade } from "polished"

import { Container } from "./styles"

interface Props {
    toggleTheme(): void
}


const Navbar: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext)


    return (
        <Container>
            Hello Chouri!
            <Switch
                onChange={toggleTheme}
                checked={title == "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.secondary.background)}
                onColor={colors.secondary.background}
            />
        </Container>
    )
}

export default Navbar
