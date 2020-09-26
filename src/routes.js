import React from 'react';
import Page404 from './components/reusable/Page404';
const ForecastNextDays = React.lazy(() => import('./components/pages/ForecastNextDays'));
const ForecastByDay = React.lazy(() => import('./components/pages/ForecastByDay'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: ForecastNextDays  },
  { path: '/:day', exact: true, name: 'Search List', component: ForecastByDay },
 

  { path: '/404', name: 'Page404', component: Page404 },

];  


export default routes;
