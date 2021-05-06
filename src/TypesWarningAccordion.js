import React,{useState} from 'react'
import plus from './New folder/images/plus.png';
import tick from './New folder/images/double-tick-indicator.png';

function TypesWarningAccordion() {
const[selected, setSelected] = useState(null)
    
const toggle = (i) =>{
    if(selected == i){
        return setSelected(null)
    }

    setSelected(i)
}
    return (
        <div className='TypeWrapper'>
            <div className='Types'>
                <h2 id='typesHeading'>What are the types of Bone Marrow Transplant?</h2><br/>
                <div>
                <img src={plus} alt='image'/> <span>Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.</span><br/><br/>
                <img src={plus} alt='image'/> <span>Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.</span><br/><br/>
                <img src={plus} alt='image'/> <span>Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.</span><br/><br/>
                <img src={plus} alt='image'/> <span>Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.</span><br/><br/>
                <img src={plus} alt='image'/> <span>Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.</span><br/>
                </div>
                

            </div>


            <h2 id='warningHeading'>The warning signs of Immune deficiency</h2><br/>

            <div className='warning'>
            
            <div className='warningCard'><img src='images/warning1.png' alt='image'/> <span>Failure to thrive – not gaining weight and height as per the age norms</span>  </div><br/>
            <div className='warningCard'><img src='images/warning2.png' alt='image'/> <span>Infections warranting multiple hospitalizations </span>  </div><br/>
            <div className='warningCard'><img src='images/warning3.png' alt='image'/> <span>Requirement of intravenous antibiotics to clear infections </span>  </div><br/>
            <div className='warningCard'><img src='images/warning4.png' alt='image'/> <span>2 or more episodes of pneumonia </span>  </div><br/>
            <div className='warningCard'><img src='images/warning5.png' alt='image'/> <span>Family history of death of children at young age due to immune deficiency </span>  </div><br/>
            <div className='warningCard'><img src='images/warning6.png' alt='image'/> <span>Repeated episodes of diarrhea </span>  </div><br/>
            <div className='warningCard'><img src='images/warning7.png' alt='image'/> <span>2 or more episodes of sinus infections within a year </span>  </div><br/>
            <div className='warningCard'><img src='images/warning8.png' alt='image'/> <span>2 or more episodes of ear discharge </span>  </div><br/>
            <div className='warningCard'><img src='images/warning9.png' alt='image'/> <span>Repeated skin infections </span>  </div><br/>
            <div className='warningCard'><img src='images/warning10.png' alt='image'/> <span>Repeated abscess formation (liver abscess, brain abscess) </span>  </div><br/>

            </div>


            <div className='wrapper'>
                <div className="accordion">
                    {data.map((item, i)=>(
                        <div className='item'>
                            <div className='title' onClick={()=> toggle(i)}>
                                <h2>{item.title}</h2>
                            </div>
                            <div className={selected === i ? ` ${'content show'}` : 'content'}><img src={tick}/>{item.options1}</div><br/>
                            <div className={selected === i ? ' content show' : 'content'}><img src={tick}/>{item.options2}</div>

                        </div>
                    ))}
                </div>
                <div className="panel">
                    
                </div>

                
                
            </div>

        </div>


)
}

const data = [
    {
        title : 'What are the conditions that requireBone Marrow Transplant?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
    {
        title : 'Which are the hematological diseases that may benefit from bone marrow transplants?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
    {
        title : 'Which are the Cancers that may benefit from bone marrow transplants?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
    {
        title : 'Do bone marrow failure syndromes require BMT?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
    {
        title : 'What are Primary Immune Deficiency diseases ?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
    {
        title : 'Which are the immune deficiencies that warrant BMT?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
    {
        title : 'What makes transplants at Aster CMI unique?',
        options1: 'BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.',
        options2: 'It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas'
    },
]


export default TypesWarningAccordion
