import { Dispatch, FormEvent, RefObject, SetStateAction, useState } from "react";
import "./LoginModal.scss";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
    loginDialogRef: RefObject<HTMLDialogElement>;
}

const initialValues = {
    username: "",
    password: "",
};

function LoginModal({ loginDialogRef }: LoginModalProps): JSX.Element {
    const navigate = useNavigate();
    const [loginInputs, setLoginInputs] = useState(initialValues);

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setLoginInputs({ ...loginInputs, [name]: value });
    };

    const handleLoginFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        localStorage.setItem("username", loginInputs.username);
        navigate(`/${loginInputs.username}/map`);
        loginDialogRef.current?.close();
    };

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
                <form action="submit" className="login__form" onSubmit={handleLoginFormSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="login__input"
                        placeholder="Username"
                        onChange={handleInputChange}
                        value={loginInputs.username}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="login__input"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={loginInputs.password}
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
