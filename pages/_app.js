import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../components/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
