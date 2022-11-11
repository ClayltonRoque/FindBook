import styled from "styled-components";

export const NoTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  img {
    margin-left: 5px;
    width: 30rem;
  }
`;
