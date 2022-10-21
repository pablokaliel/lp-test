import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Biblia from "./Pages/Biblia";
import { Diversos } from "./Pages/Diversos";
import Hinario from "./Pages/Hinario";
import Home from "./Pages/Home";
import Relatorio from "./Pages/HinarioMusica";
import Veu from "./Pages/Veu";

export const MappedRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veu/:slug" element={<Veu />} />
        <Route path="/Hinariocanto/:slug" element={<Hinario/>} />
        <Route path="/biblia/:slug" element={<Biblia />} />
        <Route path="/hinariomusica/:slug" element={<Relatorio />} />
        <Route path="/diversos/:slug" element={<Diversos />} />
      </Routes>

      
   
    </Router>
  );
};
