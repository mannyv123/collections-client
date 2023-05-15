import { RefObject } from "react";
import "./LoginModal.scss";

interface LoginModalProps {
    loginDialogRef: RefObject<HTMLDialogElement>;
}

function LoginModal({ loginDialogRef }: LoginModalProps): JSX.Element {
    return (
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
    );
}

export default LoginModal;
