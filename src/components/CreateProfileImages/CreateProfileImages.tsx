import "./CreateProfileImages.scss";

interface CreateProfileImagesProps {
    setSignUpStep(step: string): void;
}

function CreateProfileImages({ setSignUpStep }: CreateProfileImagesProps): JSX.Element {
    return (
        <div className="profile-imgs">
            <h2>Add Profile Images</h2>
            <div className="profile-imgs__uploads-container">
                <input type="file" name="profileImg" id="profileImg" />
                <input type="file" name="coverImg" id="coverImg" />
            </div>
            <div className="profile-imgs__btn-container">
                <button type="button" onClick={() => setSignUpStep("profile")} className="profile-imgs__btn">
                    Back
                </button>
                <button type="submit" className="profile-imgs__btn">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default CreateProfileImages;
