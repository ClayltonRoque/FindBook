import styled from "styled-components";

export const HomeContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  div {
    button {
      width: 150px;
      height: 40px;
      font-size: 16px;
      border-radius: 2px;
      align-self: flex-end;
    }
  }

  h1 {
    font-size: 32px;
    color: #6b95ff;
  }

  input {
    border: solid #6b95ff 3px;
    font-size: 20px;
    margin-top: 5px;
    width: 560px;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }
`;

export const Row = styled.div`
  border-top: 0.0625rem solid ${(props) => props.theme["gray-400"]};
  margin-top: 0.9375rem;
  padding: 0.9375rem 0.125rem 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const NavigateButton = styled.button`
  background-color: #6b95ff;
  height: 3.5rem;
  width: 13.75rem;
  border: none;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: row;
`;
