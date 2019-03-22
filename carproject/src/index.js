import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About   from './Rutas/About';
import Contact from './Rutas/Contact';
import CarList from './CarList';
import Home    from './Rutas/Home';
import Nav from './Nav';
import Vehicle from './Vehicle';

ReactDOM.render( (
    <Router>
        <div>
          <Nav />
          <switch>
            <Route path="/" component={Home} exact />
            {/* Lista de los carros */}
            <Route path="/Vehicles" component={CarList} exact />  
            {/* Detalle de los carros */}
            <Route path="Vehicles/:carId" component={Vehicle} exact/>
            <Route path="/About" component={About} exact />
            <Route path="/Contact" component={Contact} exact />
          </switch>
        </div>
</Router>),
    document.getElementById('root'));
