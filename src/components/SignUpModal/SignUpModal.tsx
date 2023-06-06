import { ChangeEvent, FormEvent, RefObject, useState } from "react";
import "./SignUpModal.scss";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateProfile from "../CreateProfile/CreateProfile";
import CreateProfileImages from "../CreateProfileImages/CreateProfileImages";
import { FormTextInputs } from "../../types/types";
import { MdClose } from "react-icons/md";

interface SignUpModalProps {
    signUpDialogRef: RefObject<HTMLDialogElement>;
}

const initialValues: FormTextInputs = {
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
    const [inputValues, setInputValues] = useState<FormTextInputs>(initialValues); //tracks form text inputs
    const [coverImg, setCoverImg] = useState<{}>();
    const [coverImgUrl, setCoverImgUrl] = useState<string>();

    //Handles form input values
    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setInputValues({ ...inputValues, [name]: value });
    };

    //Handles Cover Img
    const handleCoverImg = (event: ChangeEvent<HTMLInputElement>) => {
        // setCoverImg(event.currentTarget.files[0]);
        const seletedCoverImg = event.currentTarget.files?.[0];
        if (seletedCoverImg) {
            setCoverImg(seletedCoverImg);
            setCoverImgUrl(URL.createObjectURL(seletedCoverImg));
        }
    };

    console.log(inputValues);
    const handleSignUpFormSubmit = () => {};

    return (
        <dialog ref={signUpDialogRef} className="signup">
            <div className="signup__container">
                <MdClose
                    onClick={() => {
                        setSignUpStep("account");
                        signUpDialogRef.current?.close();
                    }}
                    className="signup__close"
                />

                <h1 className="signup__title">Sign Up</h1>
                <form action="submit" className="signup__form" onSubmit={handleSignUpFormSubmit}>
                    {signUpStep === "account" && (
                        <CreateAccount
                            setSignUpStep={setSignUpStep}
                            handleInputChange={handleInputChange}
                            inputValues={inputValues}
                        />
                    )}
                    {signUpStep === "profile" && (
                        <CreateProfile
                            setSignUpStep={setSignUpStep}
                            handleInputChange={handleInputChange}
                            inputValues={inputValues}
                        />
                    )}
                    {signUpStep === "profileImage" && (
                        <CreateProfileImages
                            setSignUpStep={setSignUpStep}
                            handleCoverImg={handleCoverImg}
                            coverImg={coverImg}
                            coverImgUrl={coverImgUrl}
                        />
                    )}
                </form>
            </div>
        </dialog>
    );
}

export default SignUpModal;
