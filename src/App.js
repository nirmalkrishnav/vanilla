import React from 'react';
import './App.css';
import Quiz from './app/components/Quiz';
import Header from './app/layouts/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Quiz />
      </div>
    );
  }
}

export default App;
