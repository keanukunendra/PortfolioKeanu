import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={Aboutus} />
      </div>
    </BrowserRouter>
  )
}

export default App;
