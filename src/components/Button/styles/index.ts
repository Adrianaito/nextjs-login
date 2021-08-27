import styled from 'styled-components'



export const ButtonStyled = styled.button`
    background-color:${props => props.theme.colors.default.background};
    color: ${props => props.theme.colors.default.text};
    padding: 0.5em;
    min-width: fit-content;
    min-height: 2.3em;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.border};

    :hover{
        background-color: ${props => props.theme.colors.secondary.background};
        color: ${props => props.theme.colors.secondary.text};
    }

    :active{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.default.text};
    }

    :disabled{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.default.text};
    }
`
