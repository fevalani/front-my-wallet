import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";

import "../styles/reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
