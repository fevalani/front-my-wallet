import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import Loader from "react-loader-spinner";

import FinanceLine from "./FinanceLine";
import UserContext from "../context/UserContext";

export default function FinancesBox() {
  const { token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const config = { header: { Authorization: `Bearer ${token}` } };
    axios
      .get()
      .then((response) => {
        setLoading(false);
      })
      .catch((response) => {
        setLoading(false);
      });
  }, []);

  return (
    <Box posts={posts} loading={loading}>
      {loading ? (
        <PositionLoader>
          <Loader type="TailSpin" color="#c6c6c6" height={80} width={80} />
        </PositionLoader>
      ) : posts.length === 0 ? (
        <p>Não há registros de entrada ou saída</p>
      ) : (
        posts.map((item) => <FinanceLine item={item} />)
      )}
    </Box>
  );
}

const Box = styled.ul`
  width: 326px;
  height: calc(100vh - 161px);

  border-radius: 5px;
  margin-bottom: 13px;
  padding: 23px 11px 10px 15px;

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

const PositionLoader = styled.span``;
