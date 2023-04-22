import React from "react";
import Container from "react-bootstrap/esm/Container";

const Header = (props) => {
  const { title } = props;
  return (
    <>
      <Container className="mb-5">
        <h1>{title}</h1>
      </Container>
    </>
  );
};

export default Header;
