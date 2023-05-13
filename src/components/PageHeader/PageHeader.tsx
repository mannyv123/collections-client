import { useRef } from "react";
import "./PageHeader.scss";
import LoginModal from "../LoginModal/LoginModal";

function PageHeader(): JSX.Element {
    const loginDialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <header className="header">
                <div className="header__logo">COLLECTIONS</div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">Home</li>
                        <li className="nav__item">My Profile</li>
                        <li
                            onClick={() => {
                                loginDialogRef.current?.showModal();
                            }}
                            className="nav__item"
                        >
                            Login
                        </li>
                        <li className="nav__item">Sign Up</li>
                        <li className="nav__item">Logout</li>
                    </ul>
                </nav>
            </header>
            <LoginModal loginDialogRef={loginDialogRef} />
        </>
    );
}

export default PageHeader;
