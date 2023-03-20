import { Route, Routes } from "react-router-dom";
import './App.css';
import Alphabetz from "./components/Alphabetz/Alphabetz";
import HydraMobile from "./components/Hydra/HydraMobile";
import HydraWeb from "./components/Hydra/HydraWeb";
import Kiko from "./components/Kiko/Kiko";
import Landing from "./components/Landing";
import Nft from "./components/Nft";
import Body from "./pages/App";


function App() {
  return (
    <div>
        
        <Routes>
           <Route path="/" element={<Body />} />
           <Route path="/hydra-mobile" element={<HydraMobile />} />
           <Route path="/hydra-web" element={<HydraWeb />} />
           <Route path="/kiko" element={<Kiko />} />
           <Route path="/nft" element={<Nft />} />
           <Route path="/landing" element={<Landing />} />
          
           <Route path="/alphabetz" element={<Alphabetz />} />
         </Routes>
    </div>
  );
}

export default App;
