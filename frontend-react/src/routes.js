import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import NewProducts from './pages/newProducts';
import Login from './pages/login';


function Routes() {
  return (
      <Router>
          <Route path = '/home' exact component = { Home} />
          <Route path = '/newProducts'  component = {NewProducts } />
          <Route path = '/editProduct/:id'  component = {NewProducts } />
          <Route path = '/'  component = {Login } />
      </Router>
  );
}

export default Routes;