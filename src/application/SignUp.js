import Container from "../styles/loginContainer";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Loader from "react-loader-spinner";
import UserContext from "../context/UserContext";

export default function SignUp() {
  const history = useHistory();
  const [body, setBody] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.user) {
      const userStorage = JSON.parse(localStorage.user);
      setUser(userStorage);
      history.push("/my-wallet/finances");
    }
  }, []);

  function signUpData(e) {
    e.preventDefault();

    if (body.password !== confirmPassword) {
      alert("Senha incorreta!");
      return;
    }

    setLoading(true);
    setIsDisabled(true);
    const promise = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/mywallet/signup`,
      body
    );
    promise
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
        alert(`${error.response?.statusText}`);
        setLoading(false);
        setIsDisabled(false);
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
          disabled={loading}
          required
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setBody({ ...body, email: e.target.value })}
          value={body.email}
          disabled={loading}
          required
        ></input>
        <input
          type="text"
          placeholder="Senha"
          onChange={(e) => setBody({ ...body, password: e.target.value })}
          value={body.password}
          disabled={loading}
          required
        ></input>
        <input
          type="text"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          disabled={loading}
          required
        ></input>
        <button type="submit" disabled={isDisabled}>
          {loading ? (
            <Loader type="ThreeDots" color="#FFF" height={40} width={60} />
          ) : (
            <>Cadastrar</>
          )}
        </button>
      </form>
      <a href="/">Já tem uma conta? Entre agora!</a>
    </Container>
  );
}
