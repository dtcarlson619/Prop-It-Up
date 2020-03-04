import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Stevenson" age="21" haircolor="Black"></PersonCard>
      <PersonCard firstName="Jason" lastName="Bourne" age="33" haircolor="Blonde"></PersonCard>
      <PersonCard firstName="Sarah" lastName="Stevenson" age="24" haircolor="Black"></PersonCard>
      <PersonCard firstName="Amy" lastName="Burger" age="44" haircolor="Red"></PersonCard>
    </div>
  );
}

export default App;
