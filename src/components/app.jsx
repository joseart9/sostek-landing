import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Nosotros from './Nosotros'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} /> 
      </Switch>
    </Router>
  );
}

export default App;
