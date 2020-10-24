import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useGlobalState from './store/useGlobalState';

import Login from './components/Login';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context } from "./store/context";
import SecureRoute from './components/SecureRoute';
const Index = () => {
  const store = useGlobalState();
  return (
    <Context.Provider value={store}>
      <Router>
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <SecureRoute component={App} />
        </Switch>
      </Router>
    </Context.Provider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
