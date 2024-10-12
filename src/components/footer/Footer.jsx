import { useState } from 'react'
import './Footer.scss'
import Popup from '../form/popup/Popup';
import FooterForm from './footerForm/FooterForm';

const Footer = () => {


    return (
        <div className='footer-main-container py-3' style={{ backgroundColor: '#444444' }}>
            <div className="container d-flex flex-column gap-5 ">
                {/* <FooterForm /> */}
                <div>
                    <p className='text-center' style={{ color: 'white' }}>COPYRIGHT 2024. SATTVA LUMINA. ALL RIGHTS RESERVED | PRIVACY POLICY</p>
                </div>
            </div>

        </div>
    )
}

export default Footer