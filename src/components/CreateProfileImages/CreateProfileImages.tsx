import { ChangeEvent } from "react";
import "./CreateProfileImages.scss";

interface CreateProfileImagesProps {
    setSignUpStep(step: string): void;
    handleCoverImg: (event: ChangeEvent<HTMLInputElement>) => void;
    coverImg: {} | undefined;
    coverImgUrl: string | undefined;
}

function CreateProfileImages({
    setSignUpStep,
    handleCoverImg,
    coverImg,
    coverImgUrl,
}: CreateProfileImagesProps): JSX.Element {
    console.log(coverImg);
    console.log(coverImgUrl);
    return (
        <div className="profile-imgs">
            <h2>Add Profile Images</h2>
            <div className="profile-imgs__uploads-container">
                {/* <label htmlFor="profileImg">FILE</label> */}
                {/* <input
                    type="file"
                    name="profileImg"
                    id="profileImg"
                    accept=".jpg, .jpeg, .png"
                    className="profile-imgs__img-input"
                /> */}
                <label htmlFor="coverImg">
                    <div className="profile-imgs__cover-img-container">
                        {coverImg && (
                            <img src={coverImgUrl} alt="cover" className="profile-imgs__cover-img" />
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
