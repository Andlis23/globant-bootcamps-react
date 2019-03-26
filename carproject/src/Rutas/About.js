import React from 'react';
import '../Style/About.css'
import buy from '../Img/buy.jpg'

const About = () => (
    <div>
    <div className="about">
      <h1>About our company</h1>
      <p>We are a company with a great career in sales of cars. 
      Our mission is to be <br/> within the highest rates of demand in the car market </p>
    </div>
    <img src= {buy} />
    </div>
)

export default About;