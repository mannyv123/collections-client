import ImageCard from "../../components/ImageCard/ImageCard";
import "./AddCollection.scss";
import { getUserProfile } from "../../utils/api";
import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { UserProfile } from "../../types/types";
import { useAuth } from "../../utils/authContext";

interface ImageData {
    file: File;
    name: string;
    latitude: number;
    longitude: number;
}

interface Collection {
    title: string;
    description: string;
    images: ImageData[];
}

function AddCollection(): JSX.Element {
    const [userId, setUserId] = useState<string>();
    const { username } = useParams();
    const { isLoggedIn } = useAuth();
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([]); //Tracks images to be uploaded / included in collection

    useEffect(() => {
        if (username) {
            getUserProfile(username, (response: UserProfile) => {
                setUserId(response.id);
            });
        }
    }, [username]);

    //Sets array of images with default values for each image
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.currentTarget.files || []);

        const newFiles: ImageData[] = files.map((file) => ({
            file,
            name: "",
            latitude: 0,
            longitude: 0,
        }));
        setSelectedImages([...newFiles]);
    };

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
                            <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                            <div className="add__images-container">
                                {selectedImages.map((fileData) => (
                                    <ImageCard />
                                ))}
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
