import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import DescriptionPage from './pages/DescriptionPage';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={Aboutus} />
          <Route path='/description' component={DescriptionPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
