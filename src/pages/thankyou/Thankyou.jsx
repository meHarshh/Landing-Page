import { Link } from 'react-router-dom'
import thankyouImage from '../../assets/images/thankyou/THANK YOU - 2.jpg'
import thankyouImageMob from '../../assets/images/thankyou/THANK YOU - 1.jpg'
import './Thankyou.scss'


const ThankYou = () => {
    return (
        <div className='container-fluid'>
            <div className='thank-you-background' style={{
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}>
                <div >

                    <Link to="/" className='btn  text-decoration-none p-2 px-4' style={{ backgroundColor: '#ef4939', color: 'white' }}>Home</Link>
                </div>

            </div>
            {/* <div className='d-flex justify-content-center'>
                <img src={thankyouImage} alt="" />
            </div> */}
        </div>
    )
}

export default ThankYou