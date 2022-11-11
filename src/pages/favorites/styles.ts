import styled from "styled-components";

export const ContainerFavoriteHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h1 {
    font-size: 32px;
    color: #6b95ff;
  }

  button {
    width: 150px;
    height: 40px;
    font-size: 16px;
    border-radius: 2px;
  }

  img {
    margin-left: 5px;
    width: 30px;
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
