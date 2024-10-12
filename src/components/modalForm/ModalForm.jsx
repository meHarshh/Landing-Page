import React from 'react';
import Form from '../form/Form';
import { IoClose } from "react-icons/io5";
// import formImage from '../../assets/images/gallery/propertyImg1.jpeg'
import ReactDOM from 'react-dom';
import './ModalForm.scss';


const ModalForm = ({ showModal, closeModal }) => {
    if (!showModal) return null; // Do not render if showModal is false

    return ReactDOM.createPortal(
        <div className='modal-form'>
            <div className='modal-content'>
                <div className='headerimg'>
                    <button type="button" className='close ' onClick={closeModal} aria-label="Close">
                        <IoClose width={20} height={20} fill="#fff" />
                    </button>
                </div>
                <div className='banner-form-section'>
                    <Form />
                </div>
            </div>
        </div>,
        document.body
    );    


};

export default ModalForm;
 