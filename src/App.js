import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Bloc from './containers/Bloc'
import Ajustes from './containers/Ajustes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Bloc}/>
          <Route path="/ajustes" component={Ajustes}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
