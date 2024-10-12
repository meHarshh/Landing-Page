// import './HeroContent.scss'
// import React, { useEffect, useState } from 'react'


// import bgImage from '../../assets/images/heroImages/brigadeBuildingImg1.webp'
// import bgImage2 from '../../assets/images/heroImages/brigadeBuildingImg3.jpg'

// import mailIcon from '../../assets/icons/send.png'
// import closeIcon from '../../assets/icons/close.png'

// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

// // import Modal from './Modal';
// import Form from '../form/Form'


// const images = [bgImage, bgImage2];

// const details = [
//     ' 5.8 Acres',
//     ' No. of APARTMENTS - 379 units',
//     ' 80% of open spaces'
// ]

// const HeroContent = () => {

//     const [currentImage, setCurrentImage] = useState(0);

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const [isBtnClicked, setIsBtnClicked] = useState(false)

//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);

//     const initialFields = {
//         name: '',
//         email: '',
//         mobileNummber: '',
//         message: ''
//     }

//     const [data, setData] = useState(initialFields);
//     const [isFormVisible, setIsFormVisible] = useState(false)

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//         }, 3000); // Change image every 5 seconds

//         return () => clearInterval(intervalId); // Clean up on component unmount
//     }, [images.length]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData({ ...data, [name]: true })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         alert('thanks for showing interest')
//     }

//     const handleClickIcon = () => {
//         setIsFormVisible(!isFormVisible)
//     }


//     return (
//         <div className="hero-main-container position-relative w-100">
//             <section
//                 className="banner-background position-absolute top-0 start-0 w-100 h-100"
//                 style={{ backgroundImage: `url(${images[currentImage]})` }}>

//             </section>
//             <section className='hero-content'>
//                 <div className="hero-overlay-content d-flex flex-column position-absolute gap-3 align-items-start translate-middle p-3 w-50">
//                     <section className='d-flex flex-column align-items-start'>
//                         <h4 className='d-flex align-items-center gap-1 mb-1'><FaLocationDot /> YELAHANKA, BENGALURU, KARNATAKA</h4>
//                         <h1 className='mb-3'>BRIGADE INSIGNIA</h1>
//                         <h2>3,4 <span>&#38;</span> 5 BHK Apartments </h2>
//                     </section>
//                     <section className='d-flex flex-column align-items-start gap-2'>

//                         <div className='d-flex flex-column align-items-start gap-1'>
//                             {details.map((item, idx) => (
//                                 <h4 key={idx} > <span>&rarr;</span>{item}</h4>
//                             ))}
//                         </div>
//                         <div onClick={() => setIsBtnClicked(true)}>
//                             {/* button from uiverse */}
//                             <button className="cssbuttons-io-button" >
//                                 Get started
//                                 <div className="icon">
//                                     <svg
//                                         height="24"
//                                         width="24"
//                                         viewBox="0 0 24 24"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path d="M0 0h24v24H0z" fill="none"></path>
//                                         <path
//                                             d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                                             fill="currentColor"
//                                         ></path>
//                                     </svg>
//                                 </div>
//                             </button>
//                         </div>
//                     </section>
//                 </div>
//                 <div className={`position-absolute hero-icon-div p-2 ${isFormVisible ? 'icon-visible' : 'icon-hidden'}`} onClick={handleClickIcon} >
//                     <img src={`${isFormVisible ? closeIcon : mailIcon}`} alt="icon" className='mail-icon' />
//                 </div>
//                 <div className={`position-absolute hero-form-div py-4 px-5  ${isFormVisible ? 'form-visible' : 'form-hidden'}`}>
//                     <form action="" onSubmit={handleSubmit}>
//                         <div className='mb-3'>
//                             <h2>Got questions?</h2>
//                             <h5>we are here to help you</h5>
//                         </div>
//                         <div className="mb-3">
//                             <input type="text" className="form-control" onChange={handleChange} value={data.name} name='name' placeholder='Name' />
//                         </div>
//                         <div className="mb-3">
//                             <input type="email" className="form-control" onChange={handleChange} value={data.email} name='email' placeholder='Email' />
//                         </div>
//                         <div className="mb-3">
//                             <input type="text" className="form-control" onChange={handleChange} value={data.mobileNummber} name='mobileNumber' placeholder='Number' />
//                         </div>
//                         <div className="mb-3">
//                             < textarea className="form-control" onChange={handleChange} value={data.message} name='message' placeholder='Message Here' ></textarea>
//                         </div>
//                         <div className='mb-3 '>
//                             <button type='submit' className='hero-form-btn btn  border py-2' >
//                                 I'm interested
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </section>

//             {/*             
//                 <Modal isOpen={isModalOpen} onClose={closeModal}>
//                     <Form isOpen={isModalOpen} isClose={closeModal} />
//                 </Modal> */}

//         </div>
//     )
// }
// export default HeroContent;
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import heroImg1 from '../../assets/images/heroImages/COVER PHOTO - 1.jpg';
import heroImg2 from '../../assets/images/heroImages/COVER PHOTO - 2.jpg';
import heroMobileImg1 from '../../assets/images/heroImages/COVER PHOTO 414 X 704 - 1.jpg';
import heroMobileImg2 from '../../assets/images/heroImages/COVER PHOTO 414 X 704 - 2.jpg';

import './HeroContent.scss';

const images = [heroImg1, heroImg2];
const mobileImages = [heroMobileImg1, heroMobileImg2];

const HeroContent = () => {
    const [carouselImages, setCarouselImages] = useState(images);

    // Define custom arrow components
    const PrevButton = ({ onClick }) => (
        <button className="custom-prev-arrow" onClick={onClick}>
            &lt;
        </button>
    );

    const NextButton = ({ onClick }) => (
        <button className="custom-next-arrow" onClick={onClick}>
            &gt;
        </button>
    );

    // Handle image switching based on screen size
    useEffect(() => {
        const updateImages = () => {
            if (window.innerWidth <= 750) {
                setCarouselImages(mobileImages); // Use mobile images for small screens
            } else {
                setCarouselImages(images); // Use desktop images for larger screens
            }
        };

        // Check initial screen size
        updateImages();

        // Add resize event listener
        window.addEventListener('resize', updateImages);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateImages);
        };
    }, []);

    return (
        <div className="container-fluid p-0">
            <AliceCarousel
                items={carouselImages.map((item, idx) => (
                    <img
                        src={item}
                        alt={`Slide ${idx + 1}`}
                        className="hero-image img-fluid"
                        key={idx}
                    />
                ))}
                infinite
                autoPlay
                autoPlayInterval={2000}
                renderPrevButton={(props) => <PrevButton {...props} />}
                renderNextButton={(props) => <NextButton {...props} />}
                disableDotsControls
                responsive={{
                    0: { items: 1 },
                }}
            />
            {/* <div className='d-flex justify-content-center align-items-center '>
                <a href="https://forms.gle/GHvUpsdPXL3KdR7y5" className='btn position-absolute connect-us-a-tag' style={{ backgroundColor:'#ef4939',color:'#fff',zIndex:"100"}} >Connect With Us</a>
            </div> */}

        </div>
    );
};

export default HeroContent;