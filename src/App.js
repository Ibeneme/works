import { Route, Routes } from "react-router-dom";
import './App.css';

import Body from "./pages/App";


function App() {
  return (
    <div>
        
        <Routes>
           <Route path="/" element={<Body />} />
       
         </Routes>
    </div>
  );
}

export default App;
