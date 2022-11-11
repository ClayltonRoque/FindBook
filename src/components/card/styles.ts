import styled from "styled-components";

export const CardContainer = styled.div`
  .Card {
    margin-left: 30px;
    color: black;
    width: 300px;
    height: 470px;
    margin-top: 20px;
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
  }

  .Resumo {
    font-size: 12px;
  }

  .linkCard,
  .favorite {
    font-size: 14px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 24px;
`;

export const ImgDiv = styled.div`
  display: flex;
  min-height: 300px;
  max-height: 300px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CardSubTitle = styled.h2`
  font-size: 16px;
  font-weight: lighter;
`;

export const TextZoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  min-height: 120px;
  max-height: 120px;
`;

export const ButtonZoneDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 7px;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
