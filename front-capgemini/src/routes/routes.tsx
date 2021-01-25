import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Importacao from "../pages/Importacao";
import ImportPorId from "../pages/Importacao/ByID";

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Importacao" component={Importacao} />
        <Route exact path="/Importacao/:id" component={ImportPorId} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
