import { FormEvent, RefObject, useEffect, useState } from "react";
import "./LoginModal.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/authContext";
import { MdClose } from "react-icons/md";
import { getAllUsernames } from "../../utils/api";
import { AxiosResponse } from "axios";

interface Username {
    username: string;
}

interface LoginModalProps {
    loginDialogRef: RefObject<HTMLDialogElement>;
}

const initialValues = {
    username: "",
    password: "",
};

const isErrorInitial = {
    username: false,
    password: false,
};

function LoginModal({ loginDialogRef }: LoginModalProps): JSX.Element {
    const navigate = useNavigate();
    const [loginInputs, setLoginInputs] = useState(initialValues);
    const [usernamesList, setUsernamesList] = useState<Username[]>([]);
    const [isError, setIsError] = useState(isErrorInitial);
    const [errorMsg, setErrorMsg] = useState("");
    const { handleLogin } = useAuth();

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setLoginInputs({ ...loginInputs, [name]: value });
    };

    useEffect(() => {
        getAllUsernames((response: AxiosResponse) => {
            setUsernamesList(response.data);
        });
    }, []);

    const isFormValid = () => {
        setIsError(isErrorInitial);

        //Check if any inputs are blank
        let result = false;
        for (const [key, value] of Object.entries(loginInputs)) {
            if (value === "") {
                setErrorMsg("Please do not leave field blank");
                setIsError((prevIsError) => ({ ...prevIsError, [key]: true }));
                result = true;
            }
        }
        if (result) return false;

        //Check if the username actually exists
        if (usernamesList.find((username) => username.username === loginInputs.username)) return true;

        //If username does not exist, set error msg and error state
        setErrorMsg("Username or password is incorrect");
        setIsError((prevIsError) => ({ username: true, password: true }));
        return false;
    };

    const handleLoginFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!isFormValid()) {
            return console.log("ERROR");
        }

        setLoginInputs(initialValues);
        setIsError(isErrorInitial);
        handleLogin(loginInputs.username);
        navigate(`/${loginInputs.username}/map`);
        loginDialogRef.current?.close();
    };

    console.log(isError);

    return (
        <dialog ref={loginDialogRef} className="login">
            <div className="login__container">
                <div
                    onClick={() => {
                        loginDialogRef.current?.close();
                    }}
                    className="login__close"
                >
                    <MdClose className="login__close-icon" />
                </div>
                <h1 className="login__title">Login</h1>
                <form action="submit" className="login__form" onSubmit={handleLoginFormSubmit}>
                    <div className="input__container">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className={`login__input ${isError.username ? "input__error" : ""}`}
                            placeholder="Username"
                            onChange={handleInputChange}
                            value={loginInputs.username}
                        />
                        {isError.username && errorMsg === "Please do not leave field blank" ? (
                            <p className="input__error-msg">{errorMsg}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="input__container">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={`login__input ${isError.password ? "input__error" : ""}`}
                            placeholder="Password"
                            onChange={handleInputChange}
                            value={loginInputs.password}
                        />
                        {isError.password ? <p className="input__error-msg">{errorMsg}</p> : ""}
                    </div>
                    <button type="submit" className="login__submit">
                        Login
                    </button>
                </form>
            </div>
        </dialog>
    );
}

export default LoginModal;
