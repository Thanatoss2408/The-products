import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import NewProducts from './pages/newProducts';


function Routes() {
  return (
      <Router>
          <Route path = '/' exact component = { Home} />
          <Route path = '/newProducts'  component = {NewProducts } />
          <Route path = '/editProduct/:id'  component = {NewProducts } />
         
      </Router>
  );
}

export default Routes;