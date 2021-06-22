import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../context/UserContext";
import Container from "../styles/loginContainer";

export default function Login() {
  const history = useHistory();
  const [body, setBody] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function sendLogin(e) {
    e.preventDefault();
    setIsDisabled(true);
    const config = {
      header: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const promise = axios.post("http://localhost:4000/mywallet/", body);
    promise
      .then((response) => {
        history.push("/my-wallet/finances");
      })
      .catch((response) => {
        alert("Erro no login");
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
          required
        ></input>
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
          required
        ></input>
        <button type="submit" disabled={isDisabled}>
          Entrar
        </button>
      </form>
      <p onClick={() => history.push("/signup")}>Primeira vez? Cadastre-se!</p>
    </Container>
  );
}
