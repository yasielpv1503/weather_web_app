import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './core/helper/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import Layout from './components/containers/Layout';
import { Loading } from './components/Loading';
   
function App() {
  return (
    <div>
      
      <Provider store={store}>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <Router>
          <React.Suspense fallback={Loading()}>
            <Switch>
               <Route path="/" name="Layout" render={props => <Layout {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>


    </div>

  );
}

export default App;


