import React from "react";
import Container from "../Container/index";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <p>
          Shop © 2020 <br /> Designed by Andrzej
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
