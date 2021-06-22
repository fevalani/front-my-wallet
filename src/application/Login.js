import { useHistory } from "react-router";
import Container from "../styles/loginContainer";

export default function Login() {
  const history = useHistory();
  return (
    <Container>
      <div>
        <p>MyWallet</p>
      </div>
      <form>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <button onSubmit disabled="true">
          Entrar
        </button>
      </form>
      <p onClick={() => history.push("/signup")}>Primeira vez? Cadastre-se!</p>
    </Container>
  );
}
