import { FormEvent } from "react";
import "./CreateAccount.scss";
import { FormTextInputs } from "../../types/types";

interface CreateAccountProps {
    setSignUpStep(step: string): void;
    handleInputChange(event: FormEvent): void;
    inputValues: FormTextInputs;
}

function CreateAccount({ setSignUpStep, handleInputChange, inputValues }: CreateAccountProps): JSX.Element {
    return (
        <div className="create-account">
            <h2 className="create-account__title">Create an Account</h2>
            <div className="create-account__form-inputs">
                <label htmlFor="setUsername">Create a username:</label>
                <input
                    type="text"
                    name="username"
                    id="setUsername"
                    placeholder="Create a username"
                    className="create-account__input"
                    onChange={handleInputChange}
                    value={inputValues.username}
                />
                <label htmlFor="setPassword">Create a password:</label>
                <input
                    type="password"
                    name="password"
                    id="setPassword"
                    placeholder="Set a password"
                    className="create-account__input"
                    onChange={handleInputChange}
                    value={inputValues.password}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="create-account__input"
                    onChange={handleInputChange}
                    value={inputValues.confirmPassword}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="create-account__input"
                    onChange={handleInputChange}
                    value={inputValues.email}
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
