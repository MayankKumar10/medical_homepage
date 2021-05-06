import React from 'react'
import Carousel from "react-elastic-carousel";
import user from './New folder/images/Bitmap.png'
import Item from "./Item";



function Testinomial() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

    return (
        <div className='carousel'>
            
        <h1 style={{ textAlign: "left" ,color: '#22B78E'}}>Testimonials</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><br/>
        <div className='carouselCard'>
          <Carousel breakPoints = {breakPoints}>
              {items.map(item => <div key={item.id}>
                  <div className='wraperTestinomial'>
                      <img src={user} />
                      <div key={item.id}>
                          <h2>{item.name}</h2>
                          <h4>{item.designation}</h4>
                      </div>
                      <div key={item.id}>{item.content}</div>
                  </div>
                  </div>
               )}      
          </Carousel>
        </div>
                <input className='TestinomialButton' type='Submit' value='Book An Appoinment'/>
        </div>
    )
}

const items= [
    {
        id : 1,
        name : 'Mayank',
        designation: 'Software Engineer',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id : 2,
        name : 'John Doe',
        designation: 'Software Engineer',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id : 3,
        name : 'John Doe',
        designation: 'Software Engineer',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id : 4,
        name : 'John Doe',
        designation: 'Software Engineer',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id : 5,
        name : 'John Doe',
        designation: 'Software Engineer',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id : 6,
        name : 'John Doe',
        designation: 'Software Engineer',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
  ]
  

export default Testinomial
