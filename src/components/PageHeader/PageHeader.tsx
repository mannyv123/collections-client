import "./PageHeader.scss";

function PageHeader(): JSX.Element {
    return (
        <header className="header">
            <div className="header__logo">COLLECTIONS</div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">Home</li>
                    <li className="nav__item">My Profile</li>
                    <li className="nav__item">Login</li>
                    <li className="nav__item">Sign Up</li>
                    <li className="nav__item">Logout</li>
                </ul>
            </nav>
        </header>
    );
}

export default PageHeader;
