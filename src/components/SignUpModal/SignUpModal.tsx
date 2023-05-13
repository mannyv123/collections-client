import { RefObject } from "react";
import "./SignUpModal.scss";
import { sign } from "crypto";

interface SignUpModalProps {
    signUpDialogRef: RefObject<HTMLDialogElement>;
}

function SignUpModal({ signUpDialogRef }: SignUpModalProps): JSX.Element {
    return (
        <dialog ref={signUpDialogRef}>
            <h1>Sign Up</h1>
        </dialog>
    );
}

export default SignUpModal;
