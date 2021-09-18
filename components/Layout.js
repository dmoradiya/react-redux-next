import React from "react";
import Footer from "./src/footer/footer";
import Header from "./src/header/header";
import HtmlHead from "./src/htmlHead/htmlHead";

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
