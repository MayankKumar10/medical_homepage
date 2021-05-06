import React from 'react'
import Doctor from './New folder/images/Doctor.png'

function Card() {
    return (
        <div className='CardFrame'>
            <img className='cardImage' src={Doctor} alt='Doctor Image'></img>
            <div>
                <h2>Dr. Vijay Agarwal</h2>
                <h4>MD, MRCP, PhD,CCT <br/>Lead & Sr. Consultant - Medical Oncology & Haematology</h4>
                <hr />
            <div className='info'> Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. </div>
            
            <input type='submit' value='Know More'/>
            </div>
        </div>
    )
}

export default Card
