import styled from 'styled-components'
import { Modal } from 'react-bootstrap'

export const ModalStyled = styled(Modal)`
    .modal-content{
        background-color: ${({ theme }) => theme.colors.primary.background};
        border: 2px solid ${({ theme }) => theme.colors.primary.background};
        border-radius:20px;
    }

    .modal-header,.modal-body{
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary.background};
    }

    .modal-footer,.modal-body{
        border-top: 1px solid ${({ theme }) => theme.colors.primary.background};
    }

    .close{
        span{
            color: ${({ theme }) => theme.colors.primary.background};
            font-size: 38px;
            box-shadow:none;
        }
    }
`
