import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavbarWithMegaMenu } from "./components/Nav";
import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
 
function App() {
   return (
       <BrowserRouter>
            <NavbarWithMegaMenu />
            <Routes>
              <Route path='' element={<Home />} />
            </Routes>
            <Footer />
       </BrowserRouter>
   );
}
 
export default App;