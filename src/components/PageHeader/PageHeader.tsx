import { useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./PageHeader.scss";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useAuth } from "../../utils/authContext";

function PageHeader(): JSX.Element {
    const loginDialogRef = useRef<HTMLDialogElement>(null);
    const signUpDialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();
    const { isLoggedIn, handleLogout, user } = useAuth();

    const handleUserLogout = () => {
        handleLogout();
        navigate("/");
    };

    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">
                    COLLECTIONS
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink className="nav__link" to="/">
                                Home
                            </NavLink>
                        </li>
                        {isLoggedIn && (
                            <li className="nav__item">
                                <NavLink className="nav__link" to={`/${user}/map`}>
                                    Profile
                                </NavLink>
                            </li>
                        )}
                        {!isLoggedIn && (
                            <>
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
                            </>
                        )}
                        {isLoggedIn && (
                            <li className="nav__item nav__item--modal" onClick={handleUserLogout}>
                                Logout
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
            <LoginModal loginDialogRef={loginDialogRef} />
            <SignUpModal signUpDialogRef={signUpDialogRef} loginDialogRef={loginDialogRef} />
        </>
    );
}

export default PageHeader;
