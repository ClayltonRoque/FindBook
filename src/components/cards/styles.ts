import styled from "styled-components";

export const CardContainer = styled.div `

    display: inline-block;
    margin: 20px;
  
   .Card {
        margin-left: 20px;
        color: black;
        width: 250px;
        height: 350px;
        margin-top: 20px;
        align-items: center;
   }

   .Title {
      font-size: 18px ;
   }

   .Author {
    font-size: 16px;
   }

   .CardImg {
    width: 200px;
    height: 150px;
    margin-right: 15px;
    
    border: solid 5px black;
    
   }

   .Resumo {
    font-size: 12px;
   }

   .linkCard, .favorite {
      font-size: 14px;
   }
`
