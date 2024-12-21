import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#7ba2c5" };

  return (
    <footer style={bgStyle} className="mt-auto footersection py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/Eglis-dogjani"
          aria-label="My GitHub"
        > <span className="badge bg-primary">
            Eglis Dogjani
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
