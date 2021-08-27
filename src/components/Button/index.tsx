
import { Children } from 'react'
import { ButtonStyled } from './styles'

const Button = ({ children, ...props }) => {

    return (
        <>
            <ButtonStyled {...props}>
                {children}
            </ButtonStyled>
        </>
    )
}

export default Button
