import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import { shade } from "polished"
import { StyledNavbar, StyledSwitch } from "./styles"

interface Props {
    toggleTheme(): void
}

const NavigationBar = ({ toggleTheme, brand }) => {

    const { colors, title } = useContext(ThemeContext)

    return (
        <>
            <StyledNavbar>
                <Navbar expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#">{brand}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav >
                                <Navbar.Text>
                                    Signed in as: <a href="#">Chourão</a>
                                </Navbar.Text>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <StyledSwitch>
                                    <Switch
                                        onChange={toggleTheme}
                                        checked={title == "dark"}
                                        checkedIcon={false}
                                        uncheckedIcon={false}
                                        height={10}
                                        width={35}
                                        handleDiameter={15}
                                        offColor={shade(0.15, colors.secondary.background)}
                                        onColor={colors.secondary.background}
                                    />
                                </StyledSwitch>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </StyledNavbar>
        </>
    )
}

export default NavigationBar
