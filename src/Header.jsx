import "./css/headerStyle.css"

function Header() {
    return (
    <header> 
        <nav>
            <ul>
                <li><a href="#">Hamburger</a></li>
                <li style={{float:"right"}}><a href="#">Account</a></li>
                <li style={{float:"right"}}><a href="#">Login</a></li>
            </ul>
        </nav>
    </header>);
}
export default Header;