import './Amenities.scss'
import gymIcon from '../../assets/icons/amenities/gym1.webp'
import roofTopBambooIcon from '../../assets/icons/amenities/bamboo-forest.png'
import foosBallBoardIcon from '../../assets/icons/amenities/foosball.webp'
import roofTopSkyDeckIcon from '../../assets/icons/amenities/rooftop-party.webp'
import playAreaIcon from '../../assets/icons/amenities/kids-play-area.webp'
import jogTrackIcon from '../../assets/icons/amenities/jogging-track.webp'
import swimmingIcon from '../../assets/icons/amenities/swimming.webp'
import gulfIcon from '../../assets/icons/amenities/golf-putting.webp'
import parkSittingIcon from '../../assets/icons/amenities/forest-sitting.webp'
import pickleBallIcon from '../../assets/icons/amenities/pickleball.webp'
import tableTennisIcon from '../../assets/icons/amenities/table-tennis.webp'
import spa from '../../assets/icons/amenities/spaIcon.png'

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from 'react'

const icons = [
    { icon: gymIcon, name: 'Gym' },
    { icon: roofTopBambooIcon, name: 'Rooftop Bamboo Forest' },
    { icon: foosBallBoardIcon, name: 'Foosball & Board Games' },
    { icon: playAreaIcon, name: "Kid's Play Area" },
    { icon: roofTopSkyDeckIcon, name: 'Rooftop Party Deck' },
    { icon: jogTrackIcon, name: 'Jog Track' },
    { icon: swimmingIcon, name: 'Swimming Pool' },
    { icon: parkSittingIcon, name: 'Park sitting Area' },
    { icon: pickleBallIcon, name: 'Pickle Ball' },
    { icon: tableTennisIcon, name: 'Table Tennis' },
    { icon: gulfIcon, name: 'Golf Putting' },
    // { icon: spa, name: 'Spa' }

]

const Amenities = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Remove `once: true` for continuous animations
        console.log('aos')
    }, []);

    return (
        <div style={{ background: '#172A1E' }} id='amenities' className='child'>
            <section>
                <div className='amenities-main-container container'>
                    <div className='d-flex  '>

                        <h2 className='fs-1 fs-md-2 fs-sm-4 mt-4 text-center w-100 ' style={{ color: 'white' }}>Amenities</h2>
                    </div>
                    <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 mx-0 my-4'>
                        {icons.map((item, idx) => (
                            <div key={idx} className='col  d-flex align-items-center justify-content-center g-0 '>
                                <div className='text-center mb-3'>
                                    <img src={item.icon} alt={item.name} data-aos='flip-up' className='img-fluid amenities-icons' style={{ width: '50px', height: '50px' }} />
                                    <p className='mt-2' style={{ color: 'white' }}>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Amenities


// rgb(177 180 186 / 60%
//rgb(244 244 226 / 60%);