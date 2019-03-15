import React  from 'react';
import Car    from './Car';
import './CarList.css';
import honda  from './Img/honda.jpg';
import mazda  from './Img/mazda.jpg';
import nissan from './Img/nissan.jpg';
import subaru from './Img/subaru.jpg';
  
const list = [
    {id: 1, 
     img:    honda,
     alt:   'honda',
     brand: 'Honda', 
     model: 'Civic',
     year:  '2003',
     motor: '120 HP'  },

    {id: 2,
     img:    subaru, 
     alt:   'subaru',
     brand: 'Subaru', 
     model: 'Impreza',
     year:  '2006',
     motor: '118 HP' },

     {id: 3, 
      img:    mazda,
      alt:   'mazda', 
      brand: 'Mazda',
      model: '6',
      year:  '2008',
      motor: '150 HP' },
    
    {id: 4, 
     img:    nissan, 
     alt:   'nissan',
     brand: 'Nissan',
     model: '370Z',
     year:  '2007',
     motor: '360HP'}
];

const carList = () => {
  const cars = list.map( car =>
    <Car 
      key={car.id}
      id={car.id}
      img={car.img}
      brand={car.brand}
      model={car.model}
      year={car.year}
      motor={car.motor} />
    );

  return (
    <div className= "flex-container">
      {cars}
    </div>
  )
}

export default carList;