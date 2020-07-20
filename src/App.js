import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Quiz from './app/components/Quiz';
import Header from './app/layouts/Header';
import About from './app/components/about';



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route component={Quiz} exact path="/" />
        <Route component={About} exact path="/about" />
      </div>
    );
  }
}

export default App;
