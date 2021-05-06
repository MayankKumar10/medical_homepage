import React from 'react'
import Square from './New folder/images/Group9.png'

function Footer() {
    return (
        <div>
            <footer className="wrapperFooter">
                
                <div className="wrapperFooter1">

                <div className='logosAnchor'>
                <div className="logosWrapper">
                <i class="fa fa-facebook-official "></i>
                <i class="fa fa-instagram "></i>
                <i class="fa fa-snapchat "></i>
                <i class="fa fa-pinterest-p "></i>
                <i class="fa fa-twitter "></i>
                <i class="fa fa-linkedin "></i>
                </div>

                <div className="topPointer">
                       
                <a className="anchor" href="#root"><span className="">
                    <img src={Square} /></span></a>
                </div>
                </div>
                

                <hr/>
                <p>Aster CMI. All Rights Reserved</p>

                </div>

            </footer>
        </div>
    )
}

export default Footer
