import Banner from './components/banner';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo_pw.png";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/aboutus';
function App() {
  return (
    <div className="cuerpo">
      <div>
        <Banner/>   
      </div>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}> {/**path indica la ruta principal  */}
            <Route path='inicio' element={<Home/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
          </Route> 
        </Routes>
      </div>
      
    </div>

  );
}

export default App;
