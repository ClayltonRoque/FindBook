import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  div {
    width: 90%;
    display: flex;
    justify-content: flex-end;

    button {
      width: 150px;
      height: 40px;
      font-size: 16px;
      border-radius: 2px;
      position: absolute;
    }
  }

  header {
    font-size: 32px;
  }

  input {
    font-size: 20px;
    margin-top: 5px;
    width: 560px;
    height: 35px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }
`;
