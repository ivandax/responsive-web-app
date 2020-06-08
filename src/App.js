import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, Route 
} from 'react-router-dom';
import './App.css';

import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Welcome}></ Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
