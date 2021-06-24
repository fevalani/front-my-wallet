import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Finances from "./Finances";
import Expense from "./Expense";
import Revenue from "./Revenue";

import "../styles/reset.css";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function App() {
  const [user, setUser] = useState({ name: "", token: "", userId: "" });
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
            <Expense />
          </Route>
          <Route path="/my-wallet/addrevenue" exact>
            <Revenue />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
