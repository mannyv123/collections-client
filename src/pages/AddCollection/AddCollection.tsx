import ImageCard from "../../components/ImageCard/ImageCard";
import "./AddCollection.scss";
import { getUserProfile, postCollection } from "../../utils/api";
import { useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UserProfile } from "../../types/types";
import { useAuth } from "../../utils/authContext";
import { AxiosResponse } from "axios";

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
    const [userId, setUserId] = useState<string>("");
    const { username } = useParams();
    const { isLoggedIn } = useAuth();
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([]); //Tracks images to be uploaded / included in collection
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

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

    //Handles image name changes
    const handleNameChange = (file: File, name: string) => {
        setSelectedImages((prevImages) =>
            prevImages.map((prevImage) => (prevImage.file === file ? { ...prevImage, name } : prevImage))
        );
    };

    //Handles image coordinate changes
    const handleCoordinatesChange = (file: File, latitude: number, longitude: number) => {
        setSelectedImages((prevImages) =>
            prevImages.map((prevImage) =>
                prevImage.file === file ? { ...prevImage, latitude, longitude } : prevImage
            )
        );
    };

    //Handle form submission
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Prepare form data
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        selectedImages.forEach((image) => {
            formData.append("images", image.file);
            formData.append("names", image.name);
            formData.append("latitudes", image.latitude.toString());
            formData.append("longitudes", image.longitude.toString());
        });

        //Send form data to backend API
        postCollection(userId, formData, (response: AxiosResponse) => {
            console.log(response);
        });
    };

    console.log(selectedImages);

    return (
        <>
            {isLoggedIn ? (
                <section className="add">
                    <h1 className="add__title">Add a Collection</h1>
                    <div className="add__container">
                        <form action="submit" className="add__form" onSubmit={handleSubmit}>
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
                                onChange={(event) => setTitle(event.target.value)}
                                value={title}
                            />
                            <label htmlFor="description">Description:</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Add a description for your Collection"
                                className="add__input add__input--textarea"
                                onChange={(event) => setDescription(event.target.value)}
                                value={description}
                            ></textarea>
                            <h3 className="add__sub-title">Add Images</h3>
                            <label className="add__file-input-label" htmlFor="selectImages">
                                Choose Images
                            </label>
                            <input
                                id="selectImages"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="add__file-input"
                            />
                            <div className="add__images-container">
                                {selectedImages.map((fileData, index) => (
                                    <ImageCard
                                        key={index}
                                        handleNameChange={handleNameChange}
                                        handleCoordinatesChange={handleCoordinatesChange}
                                        fileData={fileData}
                                    />
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
