import React, { lazy } from 'react';
// import React, { useContext, lazy, Suspense } from 'react';
import { Route, Switch
 // , Redirect
 } from 'react-router-dom';

// import AuthProvider, { AuthContext } from './context/auth';
// const NotFound = lazy(() => import('./containers/NotFound/NotFound'));

export const HOME = '/';
export const FAVORITES = '/favorites';

const Dashboard = lazy(() => import('./components/dash'));
// const { isAuthenticated } = useContext(AuthContext);

const Routes = () => {
  return (
    // <AuthProvider>
        <Switch>
        <Route path="/about">
            <Dashboard/>
          </Route>
        </Switch>
    // </AuthProvider>
  );
};

export default Routes;


