import React from 'react'
import BoneMarrow from './New folder/images/Group 3.png' 
import Card from './Card'

function BoneMarrowAndDoctors() {
    

    
    return (
        <div className='boneWrapper'>
            <div className='BoneMarrow'>
                <img src={BoneMarrow} className='BoneMarrowImage'></img>
                <div className='MarrowInfo'>
                    <div className='infoHeader'>
                    Bone Marrow Transplant (BMT) better known as haematopoietic stem cell transplant(HSCT) as bone marrow cells are transplanted
                    </div>
                    
                    <div>
                        <p id='info1'>Replacement of diseased or defective marrow with marrow from a healthy donor</p>
                        <p id='info2'>Medicines and in certain situations radiotherapy as well is given to get rid of diseased marrow and bone marrow cells from healthy donor is given to replace it.</p>
                        <p id='info3'>IN autologous bone marrow transplant, high dose chemotherapy is given to kill cancer cells and child own marrow cells are given back</p>
                    </div>

                </div>
            </div>

            <div className='DoctorsCard'>
                <h2 className='DoctorHeader'>Doctors</h2><br/>

                <div className='AllDoctors'>
                
                <div className='Pediatric'>
                <h2 id='header1'>Pediatric BMT</h2>

                   <> 
                   <Card />
                    <Card />
                    <Card />
                    </>
                </div>

                <div>
                <h2 id='header2'>Adult BMT</h2>
                <>
                <Card />
                <Card />
                <Card />
                </>

                </div>
            </div>

            </div>
        </div>
    )
}

export default BoneMarrowAndDoctors
