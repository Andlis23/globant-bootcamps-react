import React from 'react';
import './Style/App.css';
import Header  from './Header';
import CarList from './CarList';
import Form from './Form'
import Footer from './Footer';

const App = () => (
  <div className="App">
    <Header />
    <Form />
    <Footer />
    {/* <CarList /> */}
  </div>
)

export default App;
