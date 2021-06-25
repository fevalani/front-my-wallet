import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Finances from "./Finances";
import AddFinances from "./AddFinances";

import "../styles/reset.css";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/my-wallet/finances" exact>
            <Finances />
          </Route>
          <Route path="/my-wallet/addexpense" exact>
            <AddFinances type="expense" />
          </Route>
          <Route path="/my-wallet/addrevenue" exact>
            <AddFinances type="revenue" />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
