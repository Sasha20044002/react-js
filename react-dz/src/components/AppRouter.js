import React from 'react';
import {Switch , Route , Redirect} from 'react-router-dom';
import { allRoutes } from '../router';

const AppRouter = () => {
  return (
    <Switch>
      {allRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact/>
      )}
      <Redirect to={'/'}/>
    </Switch>
  )
};

export default AppRouter