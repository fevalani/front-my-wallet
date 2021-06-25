import { useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function AddFinances({ type }) {
  const [body, setBody] = useState({ value: "", description: "" });
  const [loading, setLoading] = useState(false);

  console.log(body);

  return (
    <Container>
      <div>Nova {type === "expense" ? "saída" : "entrada"}</div>
      <forms>
        <input
          type="text"
          placeholder="Valor"
          onChange={(e) => setBody({ ...body, value: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Descrição"
          onChange={(e) => setBody({ ...body, description: e.target.value })}
        ></input>
        <button disabled={loading}>
          {loading ? (
            <Loader type="ThreeDots" color="#FFF" height={40} width={60} />
          ) : (
            <>Salvar {type === "expense" ? "saída" : "entrada"}</>
          )}
        </button>
      </forms>
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
  forms {
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

      background-color: #a328d6;

      border-color: #a328d6;
      border-radius: 5px;

      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
  }
`;
