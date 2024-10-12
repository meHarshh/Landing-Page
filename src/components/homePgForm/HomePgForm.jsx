import { useState } from 'react';
import './HomePgForm.scss';
import Popup from '../form/popup/Popup';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const HomePgForm = () => {
    const initialFields = {
        userName: '',
        userEmail: '',
        userContact: '',
        message: '',
        consent: false,
    };

    const [data, setData] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

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
            case 'consent':
                if (!value) error = 'Consent is required';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setData({ ...data, [name]: fieldValue });

        const error = validateFields(name, fieldValue);
        setErrors((prevErrors) => ({
            ...prevErrors, [name]: error,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            userName: validateFields('userName', data.userName),
            userEmail: validateFields('userEmail', data.userEmail),
            userContact: validateFields('userContact', data.userContact),
            consent: validateFields('consent', data.consent),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).every(error => !error)) {
            // Send email using EmailJS
            const templateParams = {
                user_name: data.userName,
                user_email: data.userEmail,
                user_contact: data.userContact,
                message: data.message,
            };

            try {
                const response = await emailjs.send(
                    'service_yh7au18', // Replace with your service ID
                    'template_xbsie19', // Replace with your template ID
                    templateParams,
                    'dvKl6jN3IL7PQK2p9' // Replace with your user ID
                );

                const message = response.text || 'Submission successful!';
                navigate("/thank-you");
                setData(initialFields); // Reset form fields
            } catch (error) {
                console.error('Error sending email', error);
                setPopupMessage('There was an error submitting your request. Please try again later.');
                setShowPopup(true);
            }
        } else {
            console.log('Validation failed:', newErrors);
        }
    };

    return (
        <div className='home-pg-form container-fluid'>
            <div className='w-100 home-form-div'>
                <form onSubmit={handleSubmit} className='home-form border rounded bg-white p-5 pt-2 pb-3'>
                    <div>
                        <p className='m-1 text-center fs-5'>Connect With Us</p>
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            name='userName'
                            placeholder='Name'
                            value={data.userName}
                            onChange={handleChange}
                        />
                        {errors.userName && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.userName}</div>}
                    </div>
                    <div className='mb-3'>
                        <input
                            type="email"
                            className="form-control"
                            name='userEmail'
                            placeholder='Email'
                            value={data.userEmail}
                            onChange={handleChange}
                        />
                        {errors.userEmail && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.userEmail}</div>}
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            name='userContact'
                            placeholder='Number'
                            value={data.userContact}
                            onChange={handleChange}
                        />
                        {errors.userContact && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.userContact}</div>}
                    </div>
                    <div className='mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            name='message'
                            placeholder='Configuration'
                            value={data.message}
                            onChange={handleChange}
                        />
                        {errors.message && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.message}</div>}
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name='consent'
                            id="flexCheckChecked"
                            checked={data.consent}
                            onChange={handleChange}
                        />
                        <label className="form-check-label w-100 text-justify" htmlFor="flexCheckChecked" style={{ fontSize: '10px' }}>
                            I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                        </label>
                        {errors.consent && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.consent}</div>}
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button type="submit" className="btn px-5" style={{ backgroundColor: '#ef4939', color: 'white' }}>Submit</button>
                    </div>
                </form>
            </div>
            {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
        </div>
    );
}

export default HomePgForm;
