import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';

import DescriptionPage from './pages/DescriptionPage';
import HomePage from './pages/HomePage';

const App = () => { 
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/description" component={DescriptionPage} />
=======
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={Aboutus} />
        </Switch>
>>>>>>> afca86df62761d3b9cd2d2c675368d5d7e11134b
      </div>
    </BrowserRouter>
  )
}

export default App;
