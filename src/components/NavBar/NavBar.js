import './estiloNav.css';
import Cart from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <div class="menu">

            <nav>
                <ul>

                    <li><h1>Pizzeria Parana</h1></li>

                    <li><a href="">Nuestra historia</a></li>

                    <li><a href="">Nuestro menu</a></li>

                    <li><a href="">Nuestros equipo</a></li>

                    <li><a href="">contacto</a></li>

                    <li><Cart /></li>

                </ul>
            </nav>


        </div>)
}

export default NavBar;