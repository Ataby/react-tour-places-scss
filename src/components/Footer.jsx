import React from "react";
import FooterStyle from "../scss/footer.module.scss"

const Footer = function () {
  return <footer>Copyright by Ataby   {new Date().toLocaleTimeString()} <br/> {new Date().toLocaleDateString()}</footer>;
};
export default Footer;
