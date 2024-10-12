import './Home.scss'
import HeroContent from '../../components/heroContent/HeroContent'
import Overview from '../../components/overview/Overview'
import Hightlights from '../../components/highlights/Highlights'
import PriceList from '../../components/priceList/PriceList'
import Amenities from '../../components/amenities/Amenities'
import FloorPlan from '../../components/floorPlan/FloorPlan'
import Gallery from '../../components/gallery/Gallery'
import Location from '../../components/location/Location'
import AboutUs from '../../components/aboutUs/AboutUs'
import HomePgForm from '../../components/homePgForm/HomePgForm'

import whatsapp from '../../assets/icons/whatsapp.png'
import mailIcon from '../../assets/icons/mail.png'



import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ModalForm from '../../components/modalForm/ModalForm'
import FooterForm from '../../components/footer/footerForm/FooterForm'


const Home = () => {

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        Aos.init({ duration: 1000 }); // Remove `once: true` for continuous animations
        console.log('aos')
    }, []);


    useEffect(() => {
        // Show modal after 10 seconds initially
        const initialTimeout = setTimeout(() => {
            setShowModal(true);
        }, 10000); // 10 seconds

        // Show modal every 10 minutes (600,000 milliseconds)
        const interval = setInterval(() => {
            setShowModal(true);
        }, 600000); // 10 minutes

        // Cleanup on component unmount
        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="home-main-container" id='home'>
            <Header />
            <HeroContent />
            {/* <div style={{ backgroundColor:'#EBE6E5'}}>
                <FooterForm />
            </div> */}
            <div className="home-content-form">
                <div className="home-content" >

                    <div data-aos="fade-up">
                        <Overview />
                    </div>
                    <div data-aos="fade-up">
                        <Hightlights />
                    </div>
                    <div data-aos="fade-up">
                        <PriceList />

                    </div>
                    <div data-aos="fade-up">
                        <Amenities />

                    </div>
                    <div data-aos="fade-up">
                        <FloorPlan />

                    </div>
                    <div >
                        <Gallery />
                    </div>
                    <div >
                        <Location />

                    </div>
                    <div >
                        <AboutUs />
                    </div>
                </div>
                <div className=' home-form' style={{ top: '120px', right: '10px', zIndex: '100', }} >
                    <HomePgForm />
                </div>
            </div>

            {/* <a href='https://forms.gle/GHvUpsdPXL3KdR7y5' className='position-fixed' style={{ border: 'none', bottom: '20px', left: '80px', zIndex: '1000' }}><img src={mailIcon} alt="form" className='p-1' style={{ width: '45px', height: "45px" }} /></a> */}
            <a
                href='https://wa.me/7795039584?text=I%E2%80%99m%20interested%20in%20Sattva%20Lumina.%20Can%20you%20share%20some%20details%3F'
                className='position-fixed'
                style={{ bottom: '20px', right: '20px', zIndex: '1000' }}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={whatsapp} alt="whatsapp link" style={{ width: '45px', height: "45px" }} />
            </a>
            <Footer />
            <ModalForm showModal={showModal} closeModal={closeModal} />

        </div>
    )
}
export default Home