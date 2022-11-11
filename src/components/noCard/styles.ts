import styled from "styled-components";

export const NoTask = styled.div`
  border-top: 0.0625rem solid ${(props) => props.theme["gray-400"]};
  margin-top: 0.9375rem;
  padding: 0.9375rem 0.125rem 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-100"]};
  }

  .imgFace {
    margin-left: 5px;
    width: 20px;
  }
`;
