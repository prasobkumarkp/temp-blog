import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
import Home from './pages/Home';
import Users from './pages/Users';
import Blog from './pages/Blogs';
import Error from './pages/Error';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path={["/blog", "/blog/:id"]} component={Blog} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
