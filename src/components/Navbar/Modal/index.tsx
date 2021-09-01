import { useState } from "react"
import { NavDropdown } from 'react-bootstrap'
import ModalWrap from "../../Modal"
import Button from "../../Button"

const ModalExample = ({ title }) => {

    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }
    const handleClick = () => {
        setShow(true)
    }

    const handleThis = () => {
        console.log("This is a modal!")
    }

    return (
        <>
            <NavDropdown.Item href="#modal" onClick={handleClick}>{title}</NavDropdown.Item>
            <ModalWrap showModal={show}
                header={"Modal Example"}
                footer={
                    <Button onClick={handleThis}>Hello</Button>
                }
                handleClose={handleClose}
            >
                Hello!
            </ModalWrap>
        </>
    )
}

export default ModalExample
