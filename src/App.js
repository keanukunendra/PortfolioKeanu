import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DescriptionPage from './pages/DescriptionPage';
import HomePage from './pages/HomePage';



const App = () => { 
  return (
    <BrowserRouter>
      <div>
        <Route path="/" Component={HomePage} exact />
        <Route path="/description" Component={DescriptionPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
