import { useRef } from "react";
import "./PageHeader.scss";

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
            <dialog ref={loginDialogRef} className="login">
                <div className="login__container">
                    <p
                        onClick={() => {
                            loginDialogRef.current?.close();
                        }}
                        className="login__close"
                    >
                        X
                    </p>
                    <h1 className="login__title">Login</h1>
                    <form action="submit" className="login__form">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="login__input"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="login__input"
                            placeholder="Password"
                        />
                        <button type="submit" className="login__submit">
                            Login
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default PageHeader;
