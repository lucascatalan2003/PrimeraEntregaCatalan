import Carrito from '../Carrito/Carrito'
import './NavBar.css'
import logo from '../../assets/logo.webp'


const NavBar = () => {

    return (
        <nav className="NavCss">
            <img src={logo} />
            <ul >
                <a href="#"><li>Teclados</li></a>
                <a href="#"><li>Mouse</li></a>
                <a href="#"><li>Monitor</li></a>
                <a href="#"><li>Notebook</li></a>
            </ul>
            <div className='CarritoCss'>
                <Carrito />
            </div>
        </nav>
    )

}

export default NavBar