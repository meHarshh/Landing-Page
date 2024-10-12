import './Gallery.scss';
import image1 from '../../assets/images/gallery/sattva_lumina-entrance.jpg';
import image2 from '../../assets/images/gallery/sattva_lumina-exterior-6.jpg';
import image3 from '../../assets/images/gallery/sattva_lumina-exterior-4.jpg';
import image4 from '../../assets/images/gallery/sattva_lumina-exterior-5.jpg';
import image5 from '../../assets/images/gallery//sattva_lumina-exterior-3.jpg';
import image6 from '../../assets/images/gallery/sattva_lumina-exterior-7.jpg';

import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setSelectedIndex(index);
        setShow(true);
    };

    const galleryImages = [image1, image2, image3, image4, image5, image6];

    const renderGalleryImages = () => {
        return galleryImages.map((item, idx) => (
            <div key={idx} className='col-lg-3 col-md-4 col-sm-6 col-6 g-2'>
                <img
                    src={item}
                    onClick={() => handleShow(idx)} // Pass index instead of image
                    alt={`Gallery image ${idx + 1}`}
                    className='img-fluid gallery-img'
                    style={{ cursor: 'pointer', height: 'auto' }} // allow image to scale
                />
            </div>
        ));
    };

    const handlePrev = () => {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='gallery-main-container container mb-5' id='gallery'>
            <div className='text-center'>
                <h2 className='fs-1'>Gallery</h2>
            </div>
            <div className="row g-4 mt-1 justify-content-center">
                {renderGalleryImages()}
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered size="lg" className="fullscreen-modal">
                <Modal.Body className="p-0 position-relative">
                    <button
                        className="btn btn-light position-absolute top-50 start-0 translate-middle-y m-2"
                        onClick={handlePrev}
                        aria-label="Previous Image"
                    >
                        &lt; {/* Left Arrow (you can replace this with an icon) */}
                    </button>
                    <img
                        src={galleryImages[selectedIndex]}
                        alt="Full Size"
                        className='img-fluid w-100 h-100 '
                        style={{ objectFit: 'contain' }}
                    />
                    <button
                        className="btn btn-light position-absolute top-50 end-0 translate-middle-y m-2"
                        onClick={handleNext}
                        aria-label="Next Image"
                    >
                        &gt; {/* Right Arrow (you can replace this with an icon) */}
                    </button>
                    <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 m-2"
                        aria-label="Close"
                        style={{ color: 'black' }}
                        onClick={handleClose}
                    ></button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Gallery;
