import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Users from "./pages/users";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
           exact 
           path="/" 
           element={<Home />} 
          />
          <Route 
            exact 
            path="/users" 
            element={<Users />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
