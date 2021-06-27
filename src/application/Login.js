import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../context/UserContext";
import Container from "../styles/loginContainer";

import Loader from "react-loader-spinner";

export default function Login() {
  const history = useHistory();
  const [body, setBody] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.user) {
      const userStorage = JSON.parse(localStorage.user);
      setUser(userStorage);
      history.push("/my-wallet/finances");
    }
  }, []);

  function sendLogin(e) {
    e.preventDefault();
    setIsDisabled(true);
    setLoading(true);
    const promise = axios.post(
      "https://my-wallet-back-end.herokuapp.com/mywallet/login",
      body
    );
    promise
      .then((response) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: response.data.token,
            name: response.data.name,
            userId: response.data.userId,
          })
        );
        setUser({
          token: response.data.token,
          name: response.data.name,
          userId: response.data.userId,
        });
        history.push("/my-wallet/finances");
      })
      .catch((response) => {
        alert("Erro no login");
        setLoading(false);
        setIsDisabled(false);
      });
  }

  return (
    <Container>
      <div>
        <p>MyWallet</p>
      </div>
      <form onSubmit={sendLogin}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
          disabled={isDisabled}
          required
        ></input>
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
          disabled={isDisabled}
          required
        ></input>
        <button type="submit" disabled={isDisabled}>
          {loading ? (
            <Loader type="ThreeDots" color="#FFF" height={40} width={60} />
          ) : (
            <>Entrar</>
          )}
        </button>
      </form>
      <a href="/signup">Primeira vez? Cadastre-se!</a>
    </Container>
  );
}
