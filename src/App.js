import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import './app.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";



function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/sign-up" element={<SignUp/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
