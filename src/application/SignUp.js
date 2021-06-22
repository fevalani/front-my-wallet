import Container from "../styles/loginContainer";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const history = useHistory();
  const [body, setBody] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUpData(e) {
    e.preventDefault();

    if (body.password !== confirmPassword) {
      alert("Senha incorreta!");
      return;
    }

    setIsDisabled(true);
    const promise = axios.post("http://localhost:4000/mywallet/signup", body);
    promise
      .then((response) => {
        history.push("/mywallet/");
      })
      .catch((response) => {
        alert("Erro ao cadastrar");
      });
  }

  return (
    <Container>
      <div>
        <p>MyWallet</p>
      </div>
      <form onSubmit={signUpData}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setBody({ ...body, name: e.target.value })}
          value={body.name}
          required
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
          required
        ></input>
        <input
          type="text"
          placeholder="Senha"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
          required
        ></input>
        <input
          type="text"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        ></input>
        <button type="submit" disabled={isDisabled}>
          Cadastrar
        </button>
      </form>
      <p onClick={() => history.push("/")}>Já tem uma conta? Entre agora!</p>
    </Container>
  );
}
