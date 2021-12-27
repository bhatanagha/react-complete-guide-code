import classes from './card.module.css'
import Fragment from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
 return <div>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
     portalElement
     )}
 </div>
}

export default Modal