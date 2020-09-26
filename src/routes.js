import React from 'react';
import Page404 from './components/Page404';
const Home = React.lazy(() => import('./components/Home'));
const ForecastByDay = React.lazy(() => import('./components/ForecastByDay'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Home  },
  { path: '/:day', exact: true, name: 'Search List', component: ForecastByDay },
 

  { path: '/404', name: 'Page404', component: Page404 },

];  


export default routes;
