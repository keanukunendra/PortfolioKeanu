import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import DescriptionPage from './pages/DescriptionPage';
import Footer from './components/Footer';

const App = () => {
  return(
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect exact from='/' to='/home' />
          <Route path='/about' component={Aboutus} />
          <Route path='/description' component={DescriptionPage} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
