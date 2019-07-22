import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact component={Home} />
    <Route Path="/about" component={About} />
  </div>
);

export default App;
