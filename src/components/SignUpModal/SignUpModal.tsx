import { ChangeEvent, FormEvent, RefObject, useState } from "react";
import "./SignUpModal.scss";
import CreateAccount from "../CreateAccount/CreateAccount";
import CreateProfile from "../CreateProfile/CreateProfile";
import CreateProfileImages from "../CreateProfileImages/CreateProfileImages";
import { FormTextInputs, NewUser } from "../../types/types";
import { MdClose } from "react-icons/md";
import { createUser } from "../../utils/api";

interface SignUpModalProps {
    signUpDialogRef: RefObject<HTMLDialogElement>;
    loginDialogRef: RefObject<HTMLDialogElement>;
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

function SignUpModal({ signUpDialogRef, loginDialogRef }: SignUpModalProps): JSX.Element {
    const [signUpStep, setSignUpStep] = useState<string>("account");
    const [inputValues, setInputValues] = useState<FormTextInputs>(initialValues); //tracks form text inputs
    const [coverImg, setCoverImg] = useState<File>(); //tracks file data for cover img
    const [coverImgUrl, setCoverImgUrl] = useState<string>(); //tracks temporary url for cover img preview
    const [profileImg, setProfileImg] = useState<File>(); //tracks file data for profile img
    const [profileImgUrl, setProfileImgUrl] = useState<string>(); //tracks temporary url for profile img preview

    //Handles form input values
    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setInputValues({ ...inputValues, [name]: value });
    };

    //Handles cover img
    const handleCoverImg = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedCoverImg = event.currentTarget.files?.[0];
        if (selectedCoverImg) {
            setCoverImg(selectedCoverImg);
            setCoverImgUrl(URL.createObjectURL(selectedCoverImg));
        }
    };

    //Handles profile img
    const handleProfileImg = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedProfileImg = event.currentTarget.files?.[0];
        if (selectedProfileImg) {
            setProfileImg(selectedProfileImg);
            setProfileImgUrl(URL.createObjectURL(selectedProfileImg));
        }
    };

    const handleSignUpFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { confirmPassword, ...rest } = inputValues;
        const newUser: NewUser = rest;

        //Function posts new user with API call
        try {
            const response = await createUser(newUser, coverImg, profileImg);
            console.log(response);
            signUpDialogRef.current?.close();
            loginDialogRef.current?.showModal();

            //Reset form values
            setInputValues(initialValues);
            setCoverImg(undefined);
            setCoverImgUrl(undefined);
            setProfileImg(undefined);
            setProfileImgUrl(undefined);
            setSignUpStep("account");
        } catch (error) {
            console.error(error);
        }
    };

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
                <form
                    action="submit"
                    className="signup__form"
                    onSubmit={handleSignUpFormSubmit}
                    encType="multipart/form-data"
                >
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
                            handleProfileImg={handleProfileImg}
                            profileImg={profileImg}
                            profileImgUrl={profileImgUrl}
                        />
                    )}
                </form>
            </div>
        </dialog>
    );
}

export default SignUpModal;
