import './FloorPlan.scss'
import plan1 from '../../assets/images/floorPlanImages/sattva-studio-plan.jpg'
import plan2 from '../../assets/images/floorPlanImages/sattva-1bhk-floorplan.jpg'
import plan3 from '../../assets/images/floorPlanImages/sattva-floorplan1.jpg'
import plan4 from '../../assets/images/floorPlanImages/sattva-2bhk-floorplan.jpg'
import plan5 from '../../assets/images/floorPlanImages/sattva-2bhk-floorplan2.jpg'
import plan6 from '../../assets/images/floorPlanImages/sattva-3bhk-floorplan.jpg'
import plan7 from '../../assets/images/floorPlanImages/sattva-3bhk-floorplan2.jpg'
import plan8 from '../../assets/images/floorPlanImages/sattva-masterplan.jpg'

import ModalForm from '../modalForm/ModalForm'

import { useState } from 'react'

const floorPlans = [
    { image: plan1, name: ' Studio Floor Plan', btn: 'View Plan' },
    { image: plan8, name: 'Master Plan', btn: 'View Plan' },
    { image: plan2, name: '1 BHK Floor Plan', btn: 'View Plan' },
    { image: plan3, name: '1 BHK Floor Plan', btn: 'View Plan' },
    { image: plan4, name: '2 BHK Floor Plan', btn: 'View Plan' },
    { image: plan5, name: '2 BHK Floor Plan', btn: 'View Plan' },
    { image: plan6, name: '3 BHK Floor Plan', btn: 'View Plan' },
    { image: plan7, name: '3 BHK Floor Plan', btn: 'View Plan' }

]


const FloorPlan = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    return (
        <div className='floorplan-main-container container child' id='floorPlan'>
            <section>
                <h2 className='text-center fs-2 fs-sm-3'>Floor Plan</h2>
            </section>
            <section className='floorplan-img-section' >

                <div className="row g-4 ">
                    {floorPlans.map((plan, idx) => (
                        <div key={idx} className='col-12 col-md-6 col-lg-4 mb-5' >
                            <div className='d-flex flex-column align-items-center py-4 px-2   position-relative '>
                                <img src={plan.image} alt={plan.name} className='img-fluid' style={{ width: '300px', height: '300px', filter: 'blur(5px)' }} />
                                <p className='fw-bold mt-3'>{plan.name}</p>
                                <div >
                                    {/* <a href='https://forms.gle/GHvUpsdPXL3KdR7y5' className='btn plan-btn z-3  fw-bold  fs-4 px-3 py-1' > {plan.btn}</a> */}

                                    <button className=' btn  plan-btn z-3  fw-bold  fs-4 px-3 py-1' onClick={openModal} >{plan.btn}</button>
                                </div>
                            </div>
                            {/* <div className='position-absolute z-2 ' > */}
                            {/* </div> */}
                        </div>

                    ))}
                </ div>
                {/* <div className='aligin-self-center position-absolute top-10'>
                    <button className='btn '>View Plan</button>
                </div> */}
            </section>
            <ModalForm showModal={showModal} closeModal={closeModal} />
        </div >
    )
}

export default FloorPlan