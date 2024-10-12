import './Hightlights.scss'
import img from '../../assets/images/highlightsImage/sattva-lumina-img.jpg'

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from 'react';
import ModalForm from '../modalForm/ModalForm';

const highlightPoints = [
    '30 minutes from Kempegowda International Airport and 25 minutes from Manyata Tech Park, Thanisandra, and Hebbal.',
    '13-acre development featuring 8 high-rise towers and 2 acres of green open spaces.',
    '45,000 sq ft clubhouse with 40+ lifestyle amenities like a swimming pool, tennis courts, and cricket pitch.',
    'Vastu-compliant studio, 1, 2, and 3BHK apartments with lake views from balconies.',
    'located on the fast-growing Doddaballapura Main Road, offering excellent connectivity and scenic views of Nagadasanahalli Lake.',
    "Developed by Sattva Group, a well-known real estate developer in Bangalore's prime areas.",
    'A serene and opulent community offering unparalleled luxury, comfort, and sustainability.',
]

const Hightlights = () => {


    useEffect(() => {
        Aos.init({ duration: 1000 }); // Remove `once: true` for continuous animations
        console.log('aos')
    }, []);

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <div className='highlights-main-container child py-5' id='highlight'>
            <section className="container">
                <div className='text-center mb-4'>
                    <h2 className='fs-sm-3 text-uppercase'>Project Specifications</h2>
                    <h3 className='fw-normal fs-2'>Our Highlights</h3>
                </div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-12 col-md-6 mb-4' >
                        <img src={img} alt="building" data-aos='fade-right' className='img-fluid' />
                    </div>
                    <div className='col-12 col-md-6 '>
                        <div className='text-justify'>
                            {highlightPoints.map((item, idx) => (
                                <p key={idx} className='mb-2 text-justify'>
                                    <span className='pe-3 fs-5 text-danger'>&rarr;</span>{item}
                                </p>
                            ))}
                        </div>
                        <div className='mt-4 d-flex justify-content-center justify-content-md-start'>
                            {/* <a href='https://forms.gle/GHvUpsdPXL3KdR7y5' className='btn btn-danger text-white fw-bold px-4' > Download Broucher</a> */}

                            <button className='btn btn-danger text-white fw-bold px-4' onClick={openModal} >Download Broucher</button>
                        </div>
                    </div>
                </div>
            </section>
            <ModalForm showModal={showModal} closeModal={closeModal} />
        </div>
    )
}
export default Hightlights
