import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Quiz from './app/components/Quiz';
import { Header, Tabs } from './app/layouts';
import About from './app/components/about';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route component={About} path="/about" />
          <Route component={Quiz} path="/home" />
          <Route component={Quiz} path="/" />
        </Switch>
        <Tabs />
      </div>
    );
  }
}

export default App;
