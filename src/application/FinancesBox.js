import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import Loader from "react-loader-spinner";

import FinanceLine from "./FinanceLine";
import UserContext from "../context/UserContext";

export default function FinancesBox() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let balanceValue = 0;

  useEffect(() => {
    setLoading(true);
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    axios
      .get(
        "https://my-wallet-back-end.herokuapp.com/mywallets/finances",
        config
      )
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  posts.forEach((item) => {
    if (item.type === "expense") {
      balanceValue -= item.value;
    } else {
      balanceValue += item.value;
    }
  });

  return (
    <>
      <Box posts={posts} loading={loading}>
        {loading ? (
          <span>
            <Loader type="TailSpin" color="#c6c6c6" height={80} width={80} />
          </span>
        ) : posts.length === 0 ? (
          <p>Não há registros de entrada ou saída</p>
        ) : (
          posts.map((item, i) => <FinanceLine key={i} item={item} />)
        )}
      </Box>
      <Balance value={balanceValue}>
        <p>SALDO</p>
        <p>{(balanceValue / 100).toFixed(2).replace(".", ",")}</p>
      </Balance>
    </>
  );
}

const Box = styled.ul`
  width: 326px;
  height: calc(100vh - 161px);

  border-radius: 5px 5px 0 0;
  padding: 23px 11px 0 15px;
  border-color: #fff;

  background-color: #fff;

  overflow: hidden;

  ${(props) =>
    props.posts.length === 0 || props.loading
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        `
      : ``}

  p {
    width: 180px;
    font-size: 20px;
    color: #868686;

    flex-wrap: nowrap;
  }
`;

const Balance = styled.span`
  width: 326px;
  padding: 10px 15px 15px 15px;

  border-radius: 0 0 5px 5px;

  border: none;
  background-color: #fff;
  border-color: #fff;

  display: flex;
  justify-content: space-between;

  p {
    font-size: 17px;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-weight: normal;
    color: ${(props) => (props.value > 0 ? "#03AC00" : "#C70000")};
  }
`;
