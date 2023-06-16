import { useRef, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./PageHeader.scss";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useAuth } from "../../utils/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Username {
    username: string;
}

function PageHeader(): JSX.Element {
    const [usernamesList, setUsernamesList] = useState<Username[]>([]);
    const loginDialogRef = useRef<HTMLDialogElement>(null);
    const signUpDialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();
    const { isLoggedIn, handleLogout, user } = useAuth();

    const notify = () =>
        toast.success("Account Created!", {
            isLoading: false,
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

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
                notify={notify}
                setUsernamesList={setUsernamesList}
            />
        </>
    );
}

export default PageHeader;
