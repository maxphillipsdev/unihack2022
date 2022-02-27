import React, { FC } from "react";

import Head from "next/head";
import TopNavBar from "./TopNavBar";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Learnery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/tLdhGf8/learnery.png" />
      </Head>
      <TopNavBar />
      <div style={{ height: "80px" }} />
      {children}
    </div>
  );
};

export default Layout;
