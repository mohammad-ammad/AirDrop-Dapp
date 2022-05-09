import Form from "./components/Form";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Claim from "./components/Claim/Claim";
function App() {
  return (
   <>
   {/* <Navbar/>
   <Form/> */}
   <BrowserRouter>
   <TopNav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/claim-nft' element={<Claim/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
