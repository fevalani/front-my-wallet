import Container from "../styles/loginContainer";
import { useHistory } from "react-router";

export default function SignUp() {
  const history = useHistory();
  return (
    <Container>
      <div>
        <p>MyWallet</p>
      </div>
      <form>
        <input type="text" placeholder="Nome"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <input type="password" placeholder="Confirme a senha"></input>
        <button onSubmit disabled="true">
          Cadastrar
        </button>
      </form>
      <p onClick={() => history.push("/")}>Já tem uma conta? Entre agora!</p>
    </Container>
  );
}
