import styled from "styled-components";
import {
  ExitOutline,
  AddCircleOutline,
  RemoveCircleOutline,
} from "react-ionicons";
import { useHistory } from "react-router-dom";

import FinancesBox from "./FinancesBox";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

export default function Finances() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.user) {
      const userStorage = JSON.parse(localStorage.user);
      setUser(userStorage);
      history.push("/my-wallet/finances");
    } else {
      history.push("/");
    }
  }, []);

  const { user, setUser } = useContext(UserContext);

  function deleteSession() {
    const config = { header: { Authorization: `Bearer ${user.token}` } };
    axios.delete("", config).then().catch();
  }

  return (
    <Container>
      <div>
        Olá, {user.name}!
        <ExitOutline
          onClick={() => {
            localStorage.clear();
            history.push("/");
            setUser(null);
            deleteSession();
          }}
          color={"#ffffff"}
          height="30px"
          width="30px"
        />
      </div>
      <FinancesBox />
      <div>
        <AddButton onClick={() => history.push("/my-wallet/addrevenue")}>
          <AddCircleOutline
            className
            color={"#ffffff"}
            height="25px"
            width="25px"
          />
          <p>Nova entrada</p>
        </AddButton>
        <AddButton onClick={() => history.push("/my-wallet/addexpense")}>
          <RemoveCircleOutline color={"#ffffff"} height="25px" width="25px" />
          <p>Nova saída</p>
        </AddButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;

    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 22px;
    margin-top: 22px;

    color: #fff;
    font-weight: bold;
    font-size: 26px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:nth-child(3) {
    margin: 0;
    margin-bottom: 22px;
  }
`;

const AddButton = styled.button`
  width: 155px;
  height: 114px;
  padding: 10px;

  border: none;
  border-radius: 5px;
  background-color: #a328d6;

  font-size: 17px;
  font-weight: bold;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    width: 50px;
    text-align: start;
  }
`;
