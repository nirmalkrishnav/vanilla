import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Quiz from './app/components/Quiz';
import Home from './app/components/home/';

import { Header, Tabs } from './app/layouts';
import About from './app/components/about';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route component={About} path="/about" />
          <Route component={Home} path="/home" />
          <Route component={Quiz} path="/quiz" />
        </Switch>
        <Tabs />
      </div>
    );
  }
}

export default App;
