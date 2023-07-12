import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ShowSummary from './components/ShowSummary';


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/show/:id" component={ShowSummary} />      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
