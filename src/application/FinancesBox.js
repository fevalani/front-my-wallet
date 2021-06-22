import styled from "styled-components";

export default function FinancesBox() {
  return (
    <Box>
      <p>Não há registros de entrada ou saída</p>
    </Box>
  );
}

const Box = styled.ul`
  width: 326px;
  height: 446px;

  border-radius: 5px;
  margin-bottom: 13px;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    width: 180px;
    font-size: 20px;
    color: #868686;
  }
`;
