import { useRef } from "react";
import { Link } from "react-router-dom";
import "./PageHeader.scss";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function PageHeader(): JSX.Element {
    const loginDialogRef = useRef<HTMLDialogElement>(null);
    const signUpDialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">
                    COLLECTIONS
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className="nav__link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/:userId/map">
                                My Profile
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                loginDialogRef.current?.showModal();
                            }}
                            className="nav__item nav__item--modal"
                        >
                            Login
                        </li>
                        <li
                            onClick={() => {
                                signUpDialogRef.current?.showModal();
                            }}
                            className="nav__item nav__item--modal"
                        >
                            Sign Up
                        </li>
                        {/* Will need to update scss for logout */}
                        <li className="nav__item nav__item--modal">Logout</li>
                    </ul>
                </nav>
            </header>
            <LoginModal loginDialogRef={loginDialogRef} />
            <SignUpModal signUpDialogRef={signUpDialogRef} />
        </>
    );
}

export default PageHeader;
