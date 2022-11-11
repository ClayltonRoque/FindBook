import styled from "styled-components";

export const CardContainer = styled.div`
  display: inline-block;
  margin: 20px;

  .Card {
    margin-left: 30px;
    color: black;
    width: 300px;
    height: 500px;
    margin-top: 20px;
    align-items: center;
  }

  .Title {
    height: 100px;
    font-size: 18px;
  }

  .author {
    height: 50px;
    font-size: 16px;
  }

  .CardImg {
    width: 250px;
    height: 250px;
    margin-right: 15px;

    border: solid 5px black;
  }

  .Resumo {
    font-size: 12px;
  }

  .linkCard,
  .favorite {
    font-size: 14px;
  }
`;
