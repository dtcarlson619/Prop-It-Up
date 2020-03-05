import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Stevenson" age={21} hairColor="Black" />
      <PersonCard firstName="Jason" lastName="Bourne" age={33} hairColor="Blonde" />
      <PersonCard firstName="Sarah" lastName="Stevenson" age={22} hairColor="Black" />
      <PersonCard firstName="Amy" lastName="Burger" age={44} hairColor="Red" />
    </div>
  );
}

export default App;
