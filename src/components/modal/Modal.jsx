import {useState,useEffect} from 'react';

import CloseIcon from '@mui/icons-material/Close';

import './modal.sass';

const Modal = (props) => {
    const [activeModal,setModalActive] = useState(props.active);
    
    useEffect(() => {
        setModalActive(props.active);
    },[props.active])

    const activeClass = activeModal ? 'active' : '';

    return (
        <div className={`modal ${activeClass}`}>
            <div className="modal__content">
                <CloseIcon onClick={() => props.changeModal()} className='modal__close'/>
                <div className="modal__title">Download</div>
                {props.children}
            </div>
        </div>
    )
};

export default Modal;