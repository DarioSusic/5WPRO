import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Contact from '../contact/Contact';
import Profile from '../profile/Profile';
import Cart from '../cart/Cart';
import Product from '../products/Product';
import Products from '../products/Products';
import CreateProfile from '../profile/profile-forms/CreateProfile';
import EditProfile from '../profile/profile-forms/EditProfile';
import NotFound from '../layout/ErrorPage';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/product/:id' component={Product} />
        <Route exact path='/products' component={Products} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profiles' component={Profile} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
