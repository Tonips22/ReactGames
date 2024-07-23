import '../styles/Header.css'
function Header(){
    function scrollToBegining(){
        window.scrollTo(0, 0)
    }
    
    return (
        <header className="header">
            <a href="/">
                <h1 className="logo"><span>React.</span>Games</h1>
            </a>

            <nav className="header-navbar">
                <a onClick={scrollToBegining}>Hero</a>
                <a href="#games">Games</a>
            </nav>
        </header>
    )
}

export default Header;