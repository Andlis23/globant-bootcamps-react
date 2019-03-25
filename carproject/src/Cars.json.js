import honda  from './Img/honda.jpg';
import mazda  from './Img/mazda.jpg';
import nissan from './Img/nissan.jpg';
import subaru from './Img/subaru.jpg';

export default {
 cars: [
        {id: 0, 
        img:    honda,
        alt:   'honda',
        brand: 'Honda', 
        model: 'Civic',
        year:  '2003',
        motor: '120 HP',
        amounts: 20  },
       
        {id: 1,
        img:    subaru, 
        alt:   'subaru',
        brand: 'Subaru', 
        model: 'Impreza',
        year:  '2006',
        motor: '118 HP',
        amounts: 18 },
       
        {id: 2, 
        img:    mazda,
        alt:   'mazda', 
        brand: 'Mazda',
        model: '6',
        year:  '2008',
        motor: '150 HP',
        amounts: 20 },
           
        {id: 3, 
        img:    nissan, 
        alt:   'nissan',
        brand: 'Nissan',
        model: '370Z',
        year:  '2007',
        motor: '360HP',
        amounts: 15 }
 ]
}
