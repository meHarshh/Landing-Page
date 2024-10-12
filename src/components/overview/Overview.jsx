import './Overview.scss'

import overviewImg from '../../assets/images/gallery/sattva_lumina-exterior-1.jpg'
import { useEffect, useState } from 'react'
import ModalForm from '../modalForm/ModalForm'

import "aos/dist/aos.css";
import Aos from "aos";

const Overview = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Remove `once: true` for continuous animations
        console.log('aos')
    }, []);
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    return (
        <div className='overview mt-2 border-top' id='overview'>
            <div className="overview-main-container container d-flex justify-content-center align-items-center gap-0 gap-md-4 mt-2">
                <div className="overview-left-side d-flex flex-column w-20 ">
                    <div className='col-10 overview-left-heading '>
                        {/* <h2 className="responsive-h2">At Rajankunte, Yelahanka, Bengaluru</h2> */}
                        <h1 className="responsive-h1">Sattva Lumina Luxury Apartments in Rajankunte </h1>
                    </div>
                    <div  >
                        <p className='text-justify w-100 ' style={{ textAlign: 'justify' }}>
                            Sattva Lumina is a pre-launch residential project in Rajankunte, Yelahanka, spanning 13 acres with views of
                            Nagadasanahalli Lake. It offers 1,549 homes across eight high-rise towers, including studio, 1BHK, 2BHK,
                            and 3BHK apartments. The project features a 45,000 sq. ft. clubhouse and over 40 amenities like swimming
                            pools and sports courts.
                        </p>
                        <div className='d-flex justify-content-center justify-content-md-start'>
                            {/* <a href='https://forms.gle/GHvUpsdPXL3KdR7y5' className='btn  overview-btn' > Know more</a> */}

                            <button className='btn overview-btn' onClick={openModal}>Know more </button>
                        </div>
                    </div>
                </div >
                <div className="overview-right-side d-flex flex-column  align-items-center col-6 mb-5 mt-4">
                    <p className='w-60' style={{ textAlign: 'justify' }}>Located on Doddaballapura Main Road, Sattva Lumina is well-connected
                        to Manyata Tech Park and Bangalore International Airport, both 30 minutes away. With easy access to Bellary Road and
                        Vidyaranyapura, and close to schools, hospitals, and shopping, it provides a convenient lifestyle in North Bangalore.
                    </p>
                    <img src={overviewImg} data-aos='fade-left' alt="building image" className='mb-0 img-fluid' />
                </div>
            </div>

            <ModalForm showModal={showModal} closeModal={closeModal} />
        </div>
    )
}
export default Overview