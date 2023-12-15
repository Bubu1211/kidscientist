import { Galeria } from "./paginas";

import './../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./../images/logo_pw.png";

function Home() {
    return (
      <div>
        <div className="text-center">
          <img className="img-logo rounded  img-fluid" src={logo} alt="s" />
        </div>
        <Galeria/>
      </div>
    );
  }
  export default Home;