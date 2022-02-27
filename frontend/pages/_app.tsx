import "../styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { extendTheme } from "@chakra-ui/react";
import { createContext, useMemo, useState } from "react";
import { CookiesProvider } from "react-cookie";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

export const UserContext = createContext({
  user: {},
  setUser: (a: any) => {},
  setCompetency: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [competency, setCompetency] = useState(0.5);
  const [user, setUser] = useState({
    currAge: 6,
    currCompetencies: {
      numeracy: 0.5,
      literacy: 0.5,
      emotions: 0.5,
      objects: 0.5,
    },
    currPriorities: {
      numeracy: 0.5,
      literacy: 0.5,
      emotions: 0.5,
      objects: 0.5,
    },
    currTargetAges: {
      numeracy: 6,
      literacy: 6,
      emotions: 6,
      objects: 6,
    },
  });

  const userContextProviderValue = useMemo(
    () => ({
      user: user,
      setUser: setUser,
      competency: competency,
      setCompetency: setCompetency,
    }),
    [user, setUser]
  );

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={userContextProviderValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
