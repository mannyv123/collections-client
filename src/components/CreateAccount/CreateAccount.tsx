import { FormEvent } from "react";
import "./CreateAccount.scss";

interface CreateAccountProps {
    setSignUpStep(step: string): void;
    handleInputChange(event: FormEvent): void;
    inputValues: {
        username: string;
        password: string;
        confirmPassword: string;
        email: string;
        first_name: string;
        last_name: string;
        about: string;
        setup: string;
    };
}

function CreateAccount({ setSignUpStep, handleInputChange, inputValues }: CreateAccountProps): JSX.Element {
    return (
        <div className="create-account">
            <h2 className="create-account__title">Create an Account</h2>
            <div className="create-account__form-inputs">
                <input
                    type="text"
                    name="setUsername"
                    id="setUsername"
                    placeholder="Create a username"
                    className="create-account__input"
                    onChange={handleInputChange}
                    value={inputValues.username}
                />
                <input
                    type="password"
                    name="setPassword"
                    id="setPassword"
                    placeholder="Set a password"
                    className="create-account__input"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="create-account__input"
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="create-account__input"
                />
                <button
                    type="button"
                    className="create-account__next"
                    onClick={() => setSignUpStep("profile")}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CreateAccount;
