import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
