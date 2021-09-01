import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import React, { useContext, useEffect, useState } from "react"
import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import { shade } from "polished"
import { parseCookies } from 'nookies'
import { Router } from 'next/router'
import { GetServerSideProps } from 'next'

import { StyledNavbar, StyledSwitch } from "./styles"
import { AuthContext } from '../../contexts/AuthContext'
import { getAPIClient } from '../../services/axios'
import ModalExample from "./Modal"

interface Props {
    toggleTheme(): void;
    brand: string
}

const NavigationBar: React.FC<Props> = ({ toggleTheme, brand }) => {

    const { colors, title } = useContext(ThemeContext)
    const { logout, isAuthenticated, user } = useContext(AuthContext)


    const handleLogout = () => {
        logout()
    }
    return (
        <>
            <StyledNavbar>
                <Navbar expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#">{brand}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav >
                                {isAuthenticated && (
                                    <Navbar.Text>
                                        Signed in as:  <a href="#">{user.email.match(/^.+(?=@)/)[0]}</a>
                                    </Navbar.Text>
                                )}
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <ModalExample title={"Modal"} />
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#" onClick={handleLogout}>Sign Out</NavDropdown.Item>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);

    const { ['nextauth.token']: token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    await apiClient.get('/profile/')

    return {
        props: { }
    }
}
