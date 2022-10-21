import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Biblia from "./Pages/Biblia";
import { Diversos } from "./Pages/Diversos";
import Hinario from "./Pages/Hinario";
import Home from "./Pages/Home";
import Relatorio from "./Pages/HinarioMusica";
import Veu from "./Pages/Veu";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/veu" element={<Veu/>}/>
        <Route path="/hinariocanto" element={<Hinario/>}/>
        <Route path="/hinariomusica" element={<Relatorio/>}/>
        <Route path="/diversos" element={<Diversos/>}/>
        <Route path="/biblia" element={<Biblia/>}/>
      </Routes>

      <GlobalStyle />
    </div>
  );
}

export default App;
