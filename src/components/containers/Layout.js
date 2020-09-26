import React, { Suspense } from 'react';
import Header from './Header';
import routes from '../../routes';
import { Route, Switch } from 'react-router-dom';
 import Page404 from '../reusable/Page404';
function Layout() {

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Suspense>
          <Switch>

            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Route component={Page404} />

          </Switch>
        </Suspense>
      </div>
 
    </div>
  );
}

export default Layout;


