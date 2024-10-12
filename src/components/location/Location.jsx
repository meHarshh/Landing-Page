import './Location.scss';
import tvsLocationImg from '../../assets/images/locationImage/sattva-lumina-location.png';
import { useState } from 'react';

const entertainment = [
    { name: 'Garuda Mall', distance: '1.1 KM' },
    { name: 'The Galleria Mall', distance: '2.6 KM' },
    { name: 'Mall of Asia', distance: '5 KM' },
    { name: 'Esteem Mall', distance: '7.7 KM' },
    { name: 'Citi Centre Shopping Mall', distance: '15 KM' }
];

const itHubs = [
    { name: 'Embassy Manyata Tech Park', distance: '13 KM' },
    { name: 'Rathnamahal Tech Park', distance: '8.5 KM' },
    { name: 'Infantry Techno Park', distance: '17.5 KM' },
    { name: 'Global Tech Park', distance: '19.4 KM' },
    { name: 'Bagmane Tech Park', distance: '20 KM' },
];

const transport = [
    { name: 'Rajanakunte Railway station', distance: '1 KM' },
    { name: 'Upcoming Nagavara Metro', distance: '10 KM' },
    { name: 'Bengaluru Airport', distance: '21 KM' }
];

const schools = [
    { name: 'Vishwa Vidyapeeth Takshashila', distance: '350 M' },
    { name: "National Public School", distance: '800 M' },
    { name: 'Seshadripuram High School', distance: '900 M' },
    { name: 'Government Primary School', distance: '1 KM' },
    { name: "New Town Public School", distance: '1.2 KM' },
    { name: 'Cambridge Public School', distance: '1.5 KM' },
];

const colleges = [
    { name: 'Sai Vidya Institute of Technology', distance: '1.6 KM' },
    { name: 'Presidency University', distance: '3.9 KM' },
    { name: 'Brindavan College', distance: '6.3 KM' },
    { name: 'Nitte Meenakshi Institute of Technology', distance: '6.5 KM' },
    { name: 'CMR University', distance: '8.7 KM' },
    { name: 'Dr. B.R. Ambedkar Medical College', distance: '15 KM' },
];

const hospitals = [
    { name: 'Chiguru Hospital', distance: '500 meters' },
    { name: 'KK Hospital', distance: '1.4 KM' },
    { name: 'Omega Multispeciality Hospital', distance: '1.1 KM' },
    { name: 'Shri Maruthi Hospital', distance: '3.4 KM' },
    { name: 'Medstar Speciality Hospital', distance: '6.7 KM' },
    { name: 'Manipal Hebbal Hospital', distance: '6.9 KM' },
    { name: 'SPARSH Hospital', distance: '14.1 KM' }
];

const Location = () => {
    const [activeFacility, setActiveFacility] = useState('entertainment');
    const [showFirstSet, setShowFirstSet] = useState(true);

    // Handlers for button clicks
    const handleFacilityClick = (facility) => {
        setActiveFacility(facility);
    };

    const handleScroll = () => {
        setShowFirstSet(!showFirstSet);
        setActiveFacility(!showFirstSet ? 'entertainment' : 'schools');
    };

    // Function to render the appropriate facilities based on the activeFacility state
    const renderFacilities = () => {
        const facilityData = {
            entertainment,
            itHubs,
            transport,
            schools,
            colleges,
            hospitals
        };

        return facilityData[activeFacility].map((item, idx) => (
            <div key={idx} className='d-flex gap-3 justify-content-between me-3'>
                <p className='m-0'>{item.name}</p>
                <p className='m-0'>{item.distance}</p>
            </div>
        ));
    };

    return (
        <div className='location-main-container p-1' style={{ backgroundColor: '#FAF8F5' }} id='location'>
            <div className='text-center mt-4'>
                <h2>Location</h2>
            </div>
            <div className='container d-flex flex-column flex-md-row gap-5 mt-3 justify-content-center'>
                <div className='flex-fill'>
                    <div>
                        {showFirstSet ? (
                            <div className='d-flex gap-3 flex-wrap'>
                                <div onClick={() => handleFacilityClick('entertainment')}>
                                    <h6 className={activeFacility === 'entertainment' ? 'active-facility' : ''}>Entertainment</h6>
                                </div>
                                <div onClick={() => handleFacilityClick('itHubs')}>
                                    <h6 className={activeFacility === 'itHubs' ? 'active-facility' : ''}>IT Hubs</h6>
                                </div>
                                <div onClick={() => handleFacilityClick('transport')}>
                                    <h6 className={activeFacility === 'transport' ? 'active-facility' : ''}>Transport</h6>
                                </div>
                            </div>
                        ) : (
                            <div className='d-flex gap-3 flex-wrap'>
                                <div onClick={() => handleFacilityClick('schools')}>
                                    <h6 className={activeFacility === 'schools' ? 'active-facility' : ''}>Schools</h6>
                                </div>
                                <div onClick={() => handleFacilityClick('colleges')}>
                                    <h6 className={activeFacility === 'colleges' ? 'active-facility' : ''}>Colleges</h6>
                                </div>
                                <div onClick={() => handleFacilityClick('hospitals')}>
                                    <h6 className={activeFacility === 'hospitals' ? 'active-facility' : ''}>Hospitals</h6>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='facilities-container'>
                        <hr style={{ size: '2px' }} />
                        {renderFacilities()}
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button onClick={handleScroll} className='btn border-0'>
                            {showFirstSet ? 'Next' : 'Previous'}
                        </button>
                    </div>
                </div>

                <div className='mb-5 d-flex justify-content-center'>
                    <img src={tvsLocationImg} alt="" className='img-fluid' style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    );
}

export default Location;
