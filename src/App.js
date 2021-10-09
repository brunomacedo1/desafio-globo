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
import Modal from 'react-modal';
import { ModalContextProvider } from "./context/modalContext";
import { RegistrationModal } from "./components/RegistrationModal";

Modal.setAppElement('#root');

function App() {
  return (
    <>
    <Toaster />
    <Router>
      <AuthContextProvider>
        <ModalContextProvider>
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
              <RegistrationModal />
        </ModalContextProvider>
      </AuthContextProvider>  
    </Router>
    </>
  );
}

export default App;
