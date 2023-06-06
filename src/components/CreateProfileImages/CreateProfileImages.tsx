import { ChangeEvent } from "react";
import "./CreateProfileImages.scss";

interface CreateProfileImagesProps {
    setSignUpStep(step: string): void;
    handleCoverImg: (event: ChangeEvent<HTMLInputElement>) => void;
    coverImg: {} | undefined;
    coverImgUrl: string | undefined;
    handleProfileImg: (event: ChangeEvent<HTMLInputElement>) => void;
    profileImg: {} | undefined;
    profileImgUrl: string | undefined;
}

function CreateProfileImages({
    setSignUpStep,
    handleCoverImg,
    coverImg,
    coverImgUrl,
    handleProfileImg,
    profileImg,
    profileImgUrl,
}: CreateProfileImagesProps): JSX.Element {
    console.log(profileImg);
    console.log(profileImgUrl);
    return (
        <div className="profile-imgs">
            <h2 className="profile-imgs__title">Add Profile Images</h2>
            <div className="profile-imgs__uploads-container">
                <label htmlFor="coverImg">
                    <div className="profile-imgs__cover-img-container">
                        {coverImg ? (
                            <img src={coverImgUrl} alt="cover" className="profile-imgs__cover-img" />
                        ) : (
                            "Click Here"
                        )}
                    </div>
                </label>
                <input
                    type="file"
                    name="coverImg"
                    id="coverImg"
                    accept=".jpg, .jpeg, .png"
                    className="profile-imgs__img-input"
                    onChange={handleCoverImg}
                />
                <label htmlFor="profileImg">
                    <div className="profile-imgs__profile-img-container">
                        {profileImg ? (
                            <img src={profileImgUrl} alt="profile" className="profile-imgs__profile-img" />
                        ) : (
                            "Click Here"
                        )}
                    </div>
                </label>
                <input
                    type="file"
                    name="profileImg"
                    id="profileImg"
                    accept=".jpg, .jpeg, .png"
                    className="profile-imgs__img-input"
                    onChange={handleProfileImg}
                />
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
