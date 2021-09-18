import React from "react";
import Footer from "./src/footer/Footer";
import Header from "./src/header/Header";
import HtmlHead from "./src/htmlHead/HtmlHead";

const Layout = (props) => {
  return (
    <React.Fragment>
      <HtmlHead />
      <main>
        <Header />
        {props.children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
