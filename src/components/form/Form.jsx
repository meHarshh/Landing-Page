import './Form.scss';
import formImg from '../../assets/images/gallery/sattva_lumina-building.jpg';
import { useState } from 'react';
import Popup from './popup/Popup';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Form = ({ isOpen, isClose }) => {
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
                    'service_yh7au18',
                    'template_xbsie19',
                    templateParams,
                    'dvKl6jN3IL7PQK2p9' // Use your Public Key here instead of User ID
                );

                const message = response.text || 'Submission successful!';
                // setPopupMessage(message);
                // setShowPopup(true);
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
        <div className='form-main-container d-flex align-items-center justify-content-center flex-column' id='contactForm'>
            <div className='form-content'>
                <div>
                    <img src={formImg} alt="TVS Builder" className='img-fluid img-form' />
                </div>
                <div className='text-center mt-2'>
                    <h2 className='fs-4 fs-md-2'>SATTVA LUMINA</h2>
                    <p className='h3-form-heading'>Find your dream home today with our expert assistance.</p>
                </div>
                <div className='text-center'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6 col-4 w-50'>
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        name="userName"
                                        className='w-75 pt-3'
                                        placeholder='Your Name'
                                        value={data.userName}
                                        onChange={handleChange}
                                    />
                                    {errors.userName && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.userName}</div>}
                                </div>
                            </div>
                            <div className='col-md-6 col-4 w-50'>
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        name="userContact"
                                        className='w-75 pt-3'
                                        placeholder='Your Mobile Number'
                                        value={data.userContact}
                                        onChange={handleChange}
                                    />
                                    {errors.userContact && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.userContact}</div>}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-4 w-50'>
                                <div className='form-floating mb-3'>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        className='w-75 pt-3'
                                        placeholder='Your Email Address'
                                        value={data.userEmail}
                                        onChange={handleChange}
                                    />
                                    {errors.userEmail && <div className="text-danger" style={{ margin: '0', fontSize: "12px" }}>{errors.userEmail}</div>}
                                </div>
                            </div>
                            <div className='col-md-6 col-4 w-50'>
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        name="message"
                                        className='w-75 pt-3'
                                        placeholder='Your Configuration'
                                        value={data.message}
                                        onChange={handleChange}
                                    />
                                    {errors.message && <div className="text-danger">{errors.message}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="form-check w-75 mx-auto mb-2">
                            <input
                                className="form-check-input border border-2"
                                type="checkbox"
                                name="consent"
                                id="flexCheckChecked"
                                checked={data.consent}
                                onChange={handleChange}
                            />
                            <label className="form-check-label w-100" htmlFor="flexCheckChecked" style={{ fontSize: '10px' }}>
                                I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                            </label>
                            {errors.consent && <div className="text-danger">{errors.consent}</div>}
                        </div>
                        <div className='col-md-12 py-2'>
                            <button type='submit' className='btn btn-danger px-5'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default Form;
