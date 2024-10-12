import './PriceList.scss'
import apartmentIcon from '../../assets/icons/apartment.png'
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from 'react';
import ModalForm from '../modalForm/ModalForm';

const priceDetails = [
    { icon: apartmentIcon, name: 'Apartments', price: '40.68 L * Onwards', size: '	690 sq.ft.', type: '1 BHK ', btn: 'Interested' },
    { icon: apartmentIcon, name: 'Apartments', price: '1.38 Cr * Onwards', size: ' 1650 sq.ft', type: '3 BHK Optima', btn: 'Interested' },
    { icon: apartmentIcon, name: 'Apartments', price: '1.58 Cr * Onwards ', size: '1760 sq.ft', type: '4 BHK Ultima', btn: 'Interested' },
    // { icon: apartmentIcon, name: 'Apartments', price: '6 - 9 Cr * ', size: '4204 - 5947 SQ.FT.', type: '5 BED + 2 PW + FR + SR', btn: 'Interested' },

]
const aosAnimations = ['fade-right', 'fade-down', 'fade-left', 'fade-up'];

const PriceList = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Remove `once: true` for continuous animations
        console.log('aos')
    }, []);

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    return (
        <div className='price-list-main-container' id='price'>
            <section className='container'>
                <div className='d-flex gap-4 mb-5'>
                    <h2 className='fs-1 fs-md-2 fs-sm-4 mt-5 text-center w-100'>Our Price, Your Selection</h2>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="row g-4 w-100">
                        {priceDetails.map((item, idx) => (
                            <div key={idx} className={`col-12 col-md-6 col-lg-4 `} data-aos={aosAnimations[idx % aosAnimations.length]}>
                                <div className='card d-flex flex-column align-items-center py-4 px-2 rounded-4 mb-5'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <img src={item.icon} alt="" className="img-fluid" style={{ width: '50px', height: '50px' }} />
                                        <p className='fs-5 fs-sm-6 fw-bold'>{item.name}</p>
                                    </div>
                                    <p><span className='fw-bold'>Price:</span> {item.price}</p>
                                    <p><span className='fw-bold'>Size:</span> {item.size}</p>
                                    <p><span className='fw-bold'>Type:</span> {item.type}</p>
                                    <div>
                                        {/* <a href='https://forms.gle/GHvUpsdPXL3KdR7y5' className='btn  border fw-bold px-5 price-btn' > {item.btn}</a> */}

                                        <button className='btn border fw-bold px-5 price-btn' onClick={openModal}>{item.btn}</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ModalForm showModal={showModal} closeModal={closeModal} />
        </div>
    )
}
export default PriceList