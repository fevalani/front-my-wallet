import styled from "styled-components";
import { ExitOutline, AddCircleOutline } from "react-ionicons";
import { useHistory } from "react-router-dom";

export default function Finances() {
  const history = useHistory();
  return (
    <Container>
      <div>
        Olá, Fulano!
        <ExitOutline
          onClick={() => console.log("eu quero sair!")}
          color={"#ffffff"}
          height="30px"
          width="30px"
        />
      </div>
      <Box></Box>
      <AddButton onClick={() => history.push("/my-wallet/addexpense")}>
        <AddCircleOutline
          className
          color={"#ffffff"}
          height="50px"
          width="50px"
        />
        Nova entrada
      </AddButton>
      <AddButton
        onClick={() => history.push("/my-wallet/addrevenue")}
      ></AddButton>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 100vh;

  background-color: #323232;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;

    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 22px;

    color: #fff;
    font-weight: bold;
    font-size: 26px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Box = styled.ul`
  width: 326px;
  height: 446px;

  background-color: #fff;
`;

const AddButton = styled.button`
  width: 155px;
  height: 114px;
`;
