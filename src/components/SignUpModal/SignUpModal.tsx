import { RefObject } from "react";
import "./SignUpModal.scss";
import CreateAccount from "../CreateAccount/CreateAccount";

interface SignUpModalProps {
    signUpDialogRef: RefObject<HTMLDialogElement>;
}

function SignUpModal({ signUpDialogRef }: SignUpModalProps): JSX.Element {
    return (
        <dialog ref={signUpDialogRef} className="signup">
            <div className="signup__container">
                <p
                    onClick={() => {
                        signUpDialogRef.current?.close();
                    }}
                    className="signup__close"
                >
                    X
                </p>
                <h1 className="signup__title">Sign Up</h1>
                <form action="submit" className="signup__form">
                    <CreateAccount />
                </form>
            </div>
        </dialog>
    );
}

export default SignUpModal;
