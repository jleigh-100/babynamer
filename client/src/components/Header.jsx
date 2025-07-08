import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
	justify-content: center;
`
const Header = () => {
	return (
		<Container >
			<h1>Header</h1>
		</Container>
	)
}

export default Header;