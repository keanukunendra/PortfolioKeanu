import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DescriptionPage from './pages/DescriptionPage';
import HomePage from './pages/HomePage';

const App = () => { 
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/description" component={DescriptionPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
