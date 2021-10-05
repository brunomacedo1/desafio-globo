import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Home } from "./pages/Home";

import './styles/global.scss' //Reset de css e config de variáveis de cores.
import { AddInsight } from "./pages/AddInsight";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addInsight">
          <AddInsight />
        </Route>
      </Switch>
      <Toaster />
    </Router>
  );
}

export default App;
