import { useState } from 'react';
import ModalForm from '../modalForm/ModalForm';
import './AboutUs.scss'


const AboutUs = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    return (
        <div className='about-container py-4 child ' style={{ backgroundColor: '#F4F7F0' }} id='about'>
            <div className="container ">
                <div className='text-center'>
                    <h2 className='fs-1 fs-sm-3'>About</h2>
                    <h3>Sattva Groups</h3>
                </div>
                <div className='text-justify' style={{ textAlign: "justify" }} >
                    <p  >
                        At Sattva Group, trust, innovation, and customer satisfaction are the cornerstones of our business.
                        Founded in 1993, we are one of India’s most trusted real estate developers, delivering top-quality
                        residential and commercial properties. With a commitment to excellence, we focus on designing homes
                        that cater to modern lifestyles, offering value through superior architecture and timely delivery.
                        Our properties span across major cities, reflecting our mission to create spaces that enrich lives.
                    </p>
                    <p>
                        Our legacy of over two decades in the industry stems from our dedication to sustainable practices and
                        cutting-edge design. We prioritize eco-friendly building solutions, with many of our projects receiving
                        prestigious certifications for sustainability. Our commitment to green practices ensures that our developments
                        not only meet the needs of today but also preserve resources for future generations.
                    </p>
                    <p>
                        By collaborating with renowned architects and utilizing high-quality materials, we ensure that our
                        developments meet global standards. From luxurious residences to state-of-the-art commercial spaces,
                        we are dedicated to building projects that stand the test of time. Sattva Group remains focused on
                        creating vibrant communities that enhance the quality of life for all our residents.

                    </p>
                </div>
                <div className='d-flex justify-content-center '>
                    {/* <a href='https://forms.gle/GHvUpsdPXL3KdR7y5' className='btn abt-btn' >Enquire Now</a> */}
                    <button className='btn abt-btn' onClick={openModal}>Enquire Now</button>
                </div>
            </div>
            <ModalForm showModal={showModal} closeModal={closeModal} />
        </div >
    )
}
export default AboutUs