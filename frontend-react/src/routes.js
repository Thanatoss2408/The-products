import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import NewProducts from './pages/newProducts';
import Login from './pages/login';
import NewUser from './pages/newUser';


function Routes() {
  return (
      <Router>
          <Route path = '/home'  component = { Home} />
          <Route path = '/register'  component = { NewUser} />
          <Route path = '/newProducts'  component = {NewProducts } />
          <Route path = '/editProduct/:id'  component = {NewProducts } />
          <Route path = '/'  exact component = {Login } />
      </Router>
  );
}

export default Routes;