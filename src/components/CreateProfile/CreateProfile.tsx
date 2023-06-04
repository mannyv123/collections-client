import "./CreateProfile.scss";
import { FormTextInputs } from "../../types/types";
import { FormEvent } from "react";

interface CreateProfileProps {
    setSignUpStep(step: string): void;
    handleInputChange(event: FormEvent): void;
    inputValues: FormTextInputs;
}

function CreateProfile({ setSignUpStep, handleInputChange, inputValues }: CreateProfileProps): JSX.Element {
    return (
        <div className="create-profile">
            <h2 className="create-profile__title">Create Your Profile</h2>
            <div className="create-profile__form-inputs">
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Enter Your First Name"
                    className="create-profile__input"
                    onChange={handleInputChange}
                    value={inputValues.first_name}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    className="create-profile__input"
                    onChange={handleInputChange}
                    value={inputValues.last_name}
                />
                <textarea
                    name="about"
                    id="about"
                    placeholder="Add Some Details About Yourself"
                    className="create-profile__input create-profile__input--textarea"
                    onChange={handleInputChange}
                    value={inputValues.about}
                ></textarea>
                <textarea
                    name="setup"
                    id="setup"
                    placeholder="Add What Camera You Use"
                    className="create-profile__input create-profile__input--textarea"
                    onChange={handleInputChange}
                    value={inputValues.setup}
                ></textarea>
            </div>
            <div className="create-profile__btn-container">
                <button
                    type="button"
                    onClick={() => setSignUpStep("account")}
                    className="create-profile__btn"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={() => setSignUpStep("profileImage")}
                    className="create-profile__btn"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CreateProfile;
