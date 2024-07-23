import Home from '../pages/Home';
import '../styles/Header.css'
import { Link } from 'react-router-dom';
function Header(){
    function scrollToBegining(){
        window.scrollTo(0, 0)
    }
    
    return (
        <header className="header">
            <Link to='/'>
                <h1 className="logo"><span>React.</span>Games</h1>
            </Link>

            <nav className="header-navbar">
                <a onClick={scrollToBegining}>Hero</a>
                <a href="#games">Games</a>
            </nav>
        </header>
    )
}

export default Header;