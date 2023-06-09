import ImageCard from "../../components/ImageCard/ImageCard";
import "./AddCollection.scss";
import { getUserProfile } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserProfile } from "../../types/types";
import { useAuth } from "../../utils/authContext";

function AddCollection(): JSX.Element {
    const [userId, setUserId] = useState<string>();
    const { username } = useParams();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (username) {
            getUserProfile(username, (response: UserProfile) => {
                setUserId(response.id);
            });
        }
    }, [username]);

    console.log("is logged in ", isLoggedIn);

    return (
        <>
            {isLoggedIn ? (
                <section className="add">
                    <h1 className="add__title">Add a Collection</h1>
                    <div className="add__container">
                        <form action="submit" className="add__form">
                            <div className="add__header">
                                <h3 className="add__sub-title">Add Collection Details</h3>
                                <button type="submit" className="add__create-btn">
                                    Create Collection
                                </button>
                            </div>
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Add a title for your Collection"
                                className="add__input"
                            />
                            <label htmlFor="description">Description:</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Add a description for your Collection"
                                className="add__input add__input--textarea"
                            ></textarea>
                            <h3 className="add__sub-title">Add Images</h3>
                            <div className="add__images-container">
                                {/* Temporary */}
                                <ImageCard />
                                <ImageCard />
                                <ImageCard />
                                <ImageCard />
                            </div>
                        </form>
                    </div>
                </section>
            ) : (
                "Please log in to create new collections."
            )}
        </>
    );
}

export default AddCollection;
