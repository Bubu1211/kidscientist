import { Link } from "react-router-dom";
import "./../App.css";
import icono from "./../images/icono-logo.png";
function Banner(){
    return(
        <nav class="navbar navegacion">
            <div class="container-fluid">
                <Link class="navbar-brand " to="/">
                <img src={icono} class = "img-fluid" alt="Bootstrap" width="40%"/>

                </Link>
            </div>
        </nav>
    );
}
export default Banner;