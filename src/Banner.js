import React,{useState} from 'react'
import astral from './New folder/images/Aster_logo_white.png'
import Recaptcha from 'react-recaptcha';
import App from './App.css'

function Banner() {
    const[user, setUser] = useState('');
    const[email, setEmail] = useState('');
    const[number, setNumber] = useState('');
    const[message, setMessage] = useState('');

    console.log(user);

const recaptchaLoaded =() => {
console.log('Captcha loded')
}


    return (
        <div className='wrapperBanner'>
            <div className='BannerImage' >
                <div id='innerBannerImage'>
                    <img src={astral} alt='img' id='astral'/>
                    <h1>ADULT & PAEDIATRIC BONE MARROW TRANSPLANT PROGRAMME</h1>
                    <h3>Haematology | Oncology | Immunology</h3>
                    <input type='submit' value='Book An Appoinment'/>
                </div>
            </div>
            <form className='enquiryForm'>
                <h3>Enquire now</h3>
                <input type='text' placeholder='Name' value={user} onChange={e =>{setUser(e.target.value)}} />
                <br/><br/>
                <input type='email' placeholder='Email-ID' value={email} onChange={e =>{setEmail(e.target.value)}} /><br/><br/>
                
                <input type='text' placeholder='Phone number' value={number} onChange={e =>{setNumber(e.target.value)}} /><br/><br/>
                
                <textarea placeholder='Your Message' rows='3' value={message} onChange={e =>{setMessage(e.target.value)}} /><br/><br/>
                
                <div className='checkBox'>
                <Recaptcha 
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                />
                </div>
                
                
                <button type='submit' className='formButon'>Submit</button>
            </form>

           
        </div>
    )
}

export default Banner
