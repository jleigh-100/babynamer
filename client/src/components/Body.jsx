import React from "react";
import styled from "styled-components";
import BabyNamesSwipe from "./BabyNamesSwipe.jsx";

const Container = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 40px;
`
const Body = () => {
    return (
      <Container>
        <BabyNamesSwipe />
      </Container>
    )
}

export default Body;