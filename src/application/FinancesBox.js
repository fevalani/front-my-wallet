import { useState } from "react";
import styled, { css } from "styled-components";

const bbb = [
  {
    date: "20/10",
    description: "Pão francês",
    value: "10,00",
    type: "out",
  },
  {
    date: "20/10",
    description: "Divida do pedrinho",
    value: "15,00",
    type: "in",
  },
  { date: "20/10", description: "Jogo do joão", value: "7000,00", type: "in" },
];

export default function FinancesBox() {
  const [posts, setPosts] = useState(bbb);
  console.log(bbb.map((item) => item.description));
  return (
    <Box posts={posts}>
      {posts.length === 0 ? (
        <p>Não há registros de entrada ou saída</p>
      ) : (
        bbb.map((item) => (
          <li>
            <div>{item.date}</div>
            <span>{item.description}</span>
            <p type={item.type}>{item.value}</p>
          </li>
        ))
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
    props.posts.length === 0
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

  li {
    width: 100%;

    display: flex;

    margin-bottom: 20px;
    font-size: 16px;

    div {
      width: 48px;
      padding: 0;
      margin: 0px 8px 0 0;
      color: #c6c6c6;
      font-size: 16px;
    }
    span {
      width: 100%;
    }
    p {
      color: ${(type) => console.log(type)};
      font-size: 16px;
    }
  }
`;
