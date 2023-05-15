import { RefObject, useState } from "react";
import "./SignUpModal.scss";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateProfile from "../CreateProfile/CreateProfile";

interface SignUpModalProps {
    signUpDialogRef: RefObject<HTMLDialogElement>;
}

function SignUpModal({ signUpDialogRef }: SignUpModalProps): JSX.Element {
    const [signUpStep, setSignUpStep] = useState<string>("account");

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
                <form action="submit" className="signup__form">
                    {signUpStep === "account" && <CreateAccount setSignUpStep={setSignUpStep} />}
                    {signUpStep === "profile" && <CreateProfile setSignUpStep={setSignUpStep} />}
                </form>
            </div>
        </dialog>
    );
}

export default SignUpModal;
