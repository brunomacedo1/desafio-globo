import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Home } from "./pages/Home";

import './styles/global.scss' //Reset de css e config de variáveis de cores.
import { AddInsight } from "./pages/AddInsight";
import { Login } from "./pages/Login";
import { AuthContextProvider } from "./context/auth/AuthContext";

function App() {
  
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addInsight">
            <AddInsight />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      <Toaster />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
