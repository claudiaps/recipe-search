import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <Header>
      <Menu />
    </Header>
  );
}

export default App;
