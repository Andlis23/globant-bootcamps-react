import React from 'react';
import '../Style/About.css'
import buy from '../Img/buy.jpg'

const About = () => (
    <div>
    <div className="about">
      <p>We are a company with a great career in sales of cars.<br/> 
      Our mission is to be within the highest rates of <br/> demand in the car market </p>
    </div>
    <img src= {buy} />
    </div>
)

export default About;