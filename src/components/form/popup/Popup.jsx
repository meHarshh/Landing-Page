import React from 'react';
import { RiCheckboxCircleFill } from "react-icons/ri";
import './Popup.scss'; // Import your custom styles for the popup

const Popup = ({ message, onClose }) => {
    return (
        <div className="contact-pg-popup">
            <div className="contact-pg-popup-content">
                <div className="contact-pg-popup-flex-container">
                    {/* Icon to indicate success */}
                    <RiCheckboxCircleFill className='contact-pg-popup-icon' />
                    
                    {/* Display the message passed from Form.jsx */}
                    <p>{message}</p>
                </div>
                
                {/* Close button to dismiss the popup */}
                <button className='contact-pg-btn' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
