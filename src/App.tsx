import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Header>
        <Menu />
      </Header>
    </ChakraProvider>
  );
}

export default App;
