import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home';
import Importacao from '../pages/Importacao'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Importacao" component={Importacao}/>
      </Switch>
    </BrowserRouter>
  );
}

export default routes;