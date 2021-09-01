import { FunctionComponent, ReactNode } from "react"

import { Modal } from 'react-bootstrap'
import { ModalStyled } from './styles'

interface ModalWrapInterface {
    showModal: boolean
    header: ReactNode,
    footer: ReactNode,
    handleClose: () => void,
}

const ModalWrap: FunctionComponent<ModalWrapInterface> = ({
    children,
    header,
    footer,
    showModal,
    handleClose,
}) => {

    return (
        <>
            {showModal &&
                <ModalStyled show onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{header}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {children}
                    </Modal.Body>

                    <Modal.Footer>
                        {footer}
                    </Modal.Footer>
                </ModalStyled>
            }
        </>
    )
}

export default ModalWrap
