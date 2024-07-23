import '../styles/Header.css'
function Header(){
    return (
        <header className="header">
            <a href="/">
                <h1 className="logo"><span>React.</span>Games</h1>
            </a>

            <nav className="header-navbar">
                <a href="#">Home</a>
                <a href="#">Games</a>
                <a href="#">About</a>
            </nav>
        </header>
    )
}

export default Header;