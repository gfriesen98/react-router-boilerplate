import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import RouteError from './RouteError';

const App = () => {

  return (
    <main>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={RouteError} />
      </Switch>
    </main>
  )
}

export default App;