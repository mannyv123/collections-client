import "./CreateProfile.scss";
import { FormTextInputs, FormTextInputsProfile } from "../../types/types";
import { FormEvent, useState, useEffect, ChangeEvent } from "react";

interface CreateProfileProps {
    setSignUpStep(step: string): void;
    handleInputChange(event: ChangeEvent): void;
    inputValues: FormTextInputs;
    handleInputChangeProfile(event: ChangeEvent): void;
    inputValuesProfile: FormTextInputsProfile;
}

function CreateProfile({
    setSignUpStep,
    handleInputChange,
    inputValues,
    handleInputChangeProfile,
    inputValuesProfile,
}: CreateProfileProps): JSX.Element {
    const [isBlank, setIsBlank] = useState(true);

    const checkIsBlank = () => {
        let result = false;
        for (const [_key, value] of Object.entries(inputValuesProfile)) {
            if (value === "") {
                result = true;
            }
        }
        if (result) return setIsBlank(true);

        return setIsBlank(false);
    };

    useEffect(() => {
        checkIsBlank();
    }, [inputValuesProfile]);

    return (
        <div className="create-profile">
            <div className="create-profile__form-inputs">
                <h2 className="create-profile__title">Create Your Profile</h2>
                <label htmlFor="first_name">Add your first name:</label>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="Enter Your First Name"
                    className="create-profile__input"
                    onChange={handleInputChangeProfile}
                    value={inputValuesProfile.first_name}
                />
                <label htmlFor="last_name">Add your first name:</label>
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Enter Your Last Name"
                    className="create-profile__input"
                    onChange={handleInputChangeProfile}
                    value={inputValuesProfile.last_name}
                />
                <label htmlFor="about">Add some details about yourself:</label>
                <textarea
                    name="about"
                    id="about"
                    className="create-profile__input create-profile__input--textarea"
                    onChange={handleInputChangeProfile}
                    value={inputValuesProfile.about}
                ></textarea>
                <label htmlFor="setup">What's your camera setup:</label>
                <textarea
                    name="setup"
                    id="setup"
                    className="create-profile__input create-profile__input--textarea"
                    onChange={handleInputChangeProfile}
                    value={inputValuesProfile.setup}
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
                    disabled={isBlank}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CreateProfile;
