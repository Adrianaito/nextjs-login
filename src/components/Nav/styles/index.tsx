import styled from "styled-components";

export const StyledNavbar = styled.div`

    .navbar {
        background-color: ${props => props.theme.colors.default.background};
        height: 80px;
    }
    .navbar-brand, .navbar-nav, .nav-link {
        color: ${props => props.theme.colors.default.text};

        &hover {
            color: ${props => props.theme.colors.secondary.background};
        }
    }
    .navbar-text,.navbar-brand, .navbar-nav, .nav-link{
        padding: 5px;
    }

`
export const StyledSwitch = styled.div`
    padding: 5px;
    margin-left: 2px;
`

