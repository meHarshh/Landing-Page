import axios from "axios";
import { useState } from "react";
import Popup from "../../form/popup/Popup";
import './FooterForm.scss'

const FooterForm = () => {

    const initialFields = {
        userName: '',
        userEmail: '',
        userContact: '',
        message: '',
    };

    const [data, setData] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const validateFields = (name, value) => {
        let error = '';
        switch (name) {
            case 'userName':
                if (!value) error = 'Name is required';
                break;
            case 'userEmail':
                if (!value) {
                    error = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email is invalid';
                }
                break;
            case 'userContact':
                if (!value) {
                    error = 'Mobile number is required';
                } else if (!/^\d{10}$/.test(value)) {
                    error = 'Mobile number should be exactly 10 digits';
                }
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });  // Use 'value' here instead of 'fieldValue'

        const error = validateFields(name, value);  // Pass 'value' to validation as well
        setErrors((prevErrors) => ({
            ...prevErrors, [name]: error,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            userName: validateFields('userName', data.userName),
            userEmail: validateFields('userEmail', data.userEmail),
            userContact: validateFields('userContact', data.userContact)
        };

        setErrors(newErrors);

        if (Object.values(newErrors).every(error => !error)) {
            console.log('Form data before submitting:', data);
            try {
                const response = await axios.post('https://assetsglobal.interactivedns.com:8443/users/adduser', data);
                const message = response.data.message || 'Submission successful!';
                setPopupMessage(message);
                setShowPopup(true);
                setData(initialFields); // Reset form fields
            } catch (error) {
                console.error('Error submitting form', error.response ? error.response.data : error.message);
                setPopupMessage('There was an error submitting your request. Please try again later.');
                setShowPopup(true);
            }
        } else {
            console.log('Validation failed:', newErrors);
        }
    };


    return (
        <div className="footer-form-container">
            <div>
                <h2 className='fs-1 fs-md-3 text-center mb-5 ' style={{ color: 'white' }}>Schedule A Site Visit</h2>
            </div>
            <div >
                <form action="" onSubmit={handleSubmit}>
                    <div className='d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center align-items-md-start'>
                        <div className='form-group'>
                            <input type="text" className='form-control w-100' placeholder='Name' value={data.userName} onChange={handleChange} name='userName' />
                            {errors.userName && <div className="text-danger" style={{ margin: '0', fontSize: "12px", minHeight: "16px" }}>{errors.userName}</div>}
                        </div>
                        <div className='form-group'>
                            <input type="email" className='form-control w-100' placeholder='Email' value={data.userEmail} onChange={handleChange} name='userEmail' />
                            {errors.userEmail && <div className="text-danger" style={{ margin: '0', fontSize: "12px", minHeight: "16px" }}>{errors.userEmail}</div>}
                        </div>
                        <div className='form-group'>
                            <input type="text" className='form-control w-100' placeholder='Phone' value={data.userContact} onChange={handleChange} name='userContact' />
                            {errors.userContact && <div className="text-danger" style={{ margin: '0', fontSize: "12px", minHeight: "16px" }}>{errors.userContact}</div>}
                        </div>
                        <div className='form-group'>
                            <input type="text" className='form-control w-100' placeholder='Message' value={data.message} onChange={handleChange} name='message' />
                            {errors.message && <div className="text-danger" style={{ minHeight: "16px" }}>{errors.message}</div>}
                        </div>
                        <div className='form-group'>
                            <button className='btn px-5 footer-form-btn' style={{ backgroundColor: '#ef4939', color: 'white' }} type='submit'>Submit</button>
                        </div>
                    </div>

                </form>
            </div>
            {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}

        </div>
    )
}
export default FooterForm