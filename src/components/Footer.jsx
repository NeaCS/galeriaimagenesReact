import React from "react";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/esm/Badge"

const Footer = ({title= "Ver más fotos"}) => {
    
  return (
    <div className="mt-5">
      {" "}
      <h3>Esta es nuestra galería de fotos. Síguenos para saber más</h3>
      <Button style={{ width: "200px" }} variant="info">
        {title}
      </Button>{" "}
      <Badge variant="secondary">New</Badge>
    </div>
  );
};

export default Footer;
