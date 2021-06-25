import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import UserContext from "../context/UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddFinances({ type }) {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState({ value: "", description: "", type });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.user) {
      history.push("/");
    }
  }, []);

  function addFinance(e) {
    e.PreventeDefault();
    const config = { header: { Authorization: `Bearer ${user.token}` } };
    setLoading(true);
    body.value.replace(",", "");
    axios
      .post(
        "http://localhost:4000/mywallets/finances/add/finance",
        body,
        config
      )
      .then(() => {
        setLoading(false);
        history.push("/my-wallet/finances");
      })
      .catch(() => {
        alert("Erro");
        setLoading(false);
      });
  }

  return (
    <Container>
      <div>Nova {type === "expense" ? "saída" : "entrada"}</div>
      <form onSubmit={addFinance}>
        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => setBody({ ...body, value: e.target.value })}
          value={body.value}
          disabled={loading}
          required
        ></input>
        <input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setBody({ ...body, description: e.target.value })}
          value={body.description}
          disabled={loading}
          required
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? (
            <Loader type="ThreeDots" color="#FFF" height={40} width={60} />
          ) : (
            <>Salvar {type === "expense" ? "saída" : "entrada"}</>
          )}
        </button>
        <button
          onClick={() => history.push("/my-wallet/finances")}
          disabled={loading}
        >
          Cancelar
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  padding: 25px;

  div {
    font-size: 26px;
    font-weight: bold;
    color: #fff;

    margin-bottom: 40px;
  }
  form {
    display: flex;
    flex-direction: column;

    width: 100%;

    input {
      height: 58px;
      border-radius: 5px;
      font-size: 20px;

      padding-left: 15px;
      margin-bottom: 13px;

      outline: none;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;

      ::placeholder {
        font-size: 20px;
        color: #000;
      }
    }
    button {
      width: 100%;
      height: 46px;

      margin-bottom: 10px;

      background-color: #a328d6;

      border-color: #a328d6;
      border-radius: 5px;

      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
  }
`;
