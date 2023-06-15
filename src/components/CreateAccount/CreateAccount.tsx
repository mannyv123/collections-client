import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./CreateAccount.scss";
import { FormTextInputs, FormTextInputsAccount } from "../../types/types";

interface CreateAccountProps {
    setSignUpStep(step: string): void;
    handleInputChange(event: ChangeEvent): void;
    inputValues: FormTextInputs;
    handleInputChangeAccount(event: ChangeEvent): void;
    inputValuesAccount: FormTextInputsAccount;
}

function CreateAccount({
    setSignUpStep,
    handleInputChange,
    inputValues,
    handleInputChangeAccount,
    inputValuesAccount,
}: CreateAccountProps): JSX.Element {
    const [isBlank, setIsBlank] = useState(true);

    const checkIsBlank = () => {
        let result = false;
        for (const [_key, value] of Object.entries(inputValuesAccount)) {
            if (value === "") {
                result = true;
            }
        }
        if (result) return setIsBlank(true);

        return setIsBlank(false);
    };

    useEffect(() => {
        checkIsBlank();
    }, [inputValuesAccount]);

    return (
        <div className="create-account">
            <div className="create-account__form-inputs">
                <h2 className="create-account__title">Create an Account</h2>
                <label htmlFor="setUsername">Create a username:</label>
                <input
                    type="text"
                    name="username"
                    id="setUsername"
                    placeholder="Username"
                    className="create-account__input"
                    // onChange={handleInputChange}
                    onChange={handleInputChangeAccount}
                    // value={inputValues.username}
                    value={inputValuesAccount.username}
                />
                <label htmlFor="setPassword">Create a password:</label>
                <input
                    type="password"
                    name="password"
                    id="setPassword"
                    placeholder="Password"
                    className="create-account__input"
                    // onChange={handleInputChange}
                    onChange={handleInputChangeAccount}
                    // value={inputValues.password}
                    value={inputValuesAccount.password}
                />
                <label htmlFor="confirmPassword">Confirm your password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    className="create-account__input"
                    // onChange={handleInputChange}
                    onChange={handleInputChangeAccount}
                    // value={inputValues.confirmPassword}
                    value={inputValuesAccount.confirmPassword}
                />
                <label htmlFor="email">Enter your email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="create-account__input"
                    // onChange={handleInputChange}
                    onChange={handleInputChangeAccount}
                    // value={inputValues.email}
                    value={inputValuesAccount.email}
                />
            </div>

            <button
                type="button"
                className="create-account__next"
                onClick={() => setSignUpStep("profile")}
                disabled={isBlank}
            >
                Next
            </button>
        </div>
    );
}

export default CreateAccount;
