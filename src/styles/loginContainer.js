import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    input {
      width: 326px;
      height: 58px;

      margin-bottom: 13px;
      border-radius: 5px;
      padding-left: 15px;

      font-size: 20px;

      border: none;
      outline: none;

      ::placeholder {
        color: #000;
        font-size: 20px;
      }
    }
    button {
      width: 326px;
      height: 46px;

      margin-bottom: 36px;
      border-radius: 5px;
      padding-left: 15px;

      font-size: 20px;
      font-weight: bold;

      background-color: #a328d6;
      color: #fff;
    }
  }

  div {
    display: flex;
    justify-content: center;
    p {
      font-family: "Saira Stencil One", cursive;
      font-size: 32px;
      color: #fff;

      margin-bottom: 30px;
    }
  }
  p {
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
`;
export default Container;
