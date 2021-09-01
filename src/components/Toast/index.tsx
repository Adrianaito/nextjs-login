import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export function notify(message) {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
    })
}
export function notifyError(message) {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
    })
}
