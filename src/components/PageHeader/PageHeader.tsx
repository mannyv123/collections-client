// Styling
import "./PageHeader.scss";
import "react-toastify/dist/ReactToastify.css";
// Components
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
// Hooks and Elements
import { useRef, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../utils/authContext";

interface Username {
    username: string;
}

function PageHeader(): JSX.Element {
    const navigate = useNavigate();
    const [usernamesList, setUsernamesList] = useState<Username[]>([]); //Holds listing of current usernames for validation when logging in and after creating new user
    const loginDialogRef = useRef<HTMLDialogElement>(null); //Ref to Login Modal
    const signUpDialogRef = useRef<HTMLDialogElement>(null); //Ref to Sign Up Modal
    const { isLoggedIn, handleLogout, user } = useAuth(); //Auth context; Conditionnally render components based on logged in status

    //Removes logged in user from local storage and navigates back to home page
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
            <LoginModal
                loginDialogRef={loginDialogRef}
                usernamesList={usernamesList}
                setUsernamesList={setUsernamesList}
            />
            <SignUpModal
                signUpDialogRef={signUpDialogRef}
                loginDialogRef={loginDialogRef}
                setUsernamesList={setUsernamesList}
            />
        </>
    );
}

export default PageHeader;
