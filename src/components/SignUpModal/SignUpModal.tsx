import { FormEvent, RefObject, useState } from "react";
import "./SignUpModal.scss";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateProfile from "../CreateProfile/CreateProfile";
import CreateProfileImages from "../CreateProfileImages/CreateProfileImages";

interface SignUpModalProps {
    signUpDialogRef: RefObject<HTMLDialogElement>;
}

const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    first_name: "",
    last_name: "",
    about: "",
    setup: "",
};

function SignUpModal({ signUpDialogRef }: SignUpModalProps): JSX.Element {
    const [signUpStep, setSignUpStep] = useState<string>("account");
    const [inputValues, setInputValues] = useState(initialValues); //tracks form text inputs

    //Handles form input values
    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSignUpFormSubmit = () => {};

    return (
        <dialog ref={signUpDialogRef} className="signup">
            <div className="signup__container">
                <p
                    onClick={() => {
                        setSignUpStep("account");
                        signUpDialogRef.current?.close();
                    }}
                    className="signup__close"
                >
                    X
                </p>
                <h1 className="signup__title">Sign Up</h1>
                <form action="submit" className="signup__form" onSubmit={handleSignUpFormSubmit}>
                    {signUpStep === "account" && (
                        <CreateAccount
                            setSignUpStep={setSignUpStep}
                            handleInputChange={handleInputChange}
                            inputValues={inputValues}
                        />
                    )}
                    {signUpStep === "profile" && <CreateProfile setSignUpStep={setSignUpStep} />}
                    {signUpStep === "profileImage" && <CreateProfileImages setSignUpStep={setSignUpStep} />}
                </form>
            </div>
        </dialog>
    );
}

export default SignUpModal;
