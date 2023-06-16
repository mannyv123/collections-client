import ImageCard from "../../components/ImageCard/ImageCard";
import "./AddCollection.scss";
import { getUserProfile, postCollection } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { UserProfile } from "../../types/types";
import { useAuth } from "../../utils/authContext";
import { AxiosResponse } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const initialValues = {
    title: "",
    description: "",
};

const isErrorInitial = {
    title: false,
    description: false,
    imageFiles: false,
    imageInfo: false,
};

function AddCollection(): JSX.Element {
    const [userId, setUserId] = useState<string>("");
    const { username } = useParams();
    const { isLoggedIn, handleLoggedInUserCheck, user } = useAuth();
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([]); //Tracks images to be uploaded / included in collection
    const [inputValues, setInputValues] = useState(initialValues);
    const [errors, setErrors] = useState(isErrorInitial);

    const navigate = useNavigate();

    const notify = () =>
        toast.success("Collection Posted", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    useEffect(() => {
        if (username) {
            getUserProfile(username, (response: UserProfile) => {
                setUserId(response.id);
            });
        }
    }, [username]);

    //Handle text inputs
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

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

    //Handle form validation
    const isFormValid = () => {
        let result = false;
        setErrors(isErrorInitial);

        const newErrors = { ...isErrorInitial };

        //check if title is blank
        if (inputValues.title === "") {
            newErrors.title = true;
            result = true;
        }

        //check if description is blank
        if (inputValues.description === "") {
            newErrors.description = true;
            result = true;
        }

        //check if images have been selected
        if (!selectedImages.length) {
            newErrors.imageFiles = true;
            result = true;
        }

        //Check each image
        for (const image of selectedImages) {
            if (image.name === "" || image.latitude === 0 || image.longitude === 0) {
                newErrors.imageInfo = true;
                result = true;
            }
        }

        if (result) {
            setErrors(newErrors);
            return false;
        } else {
            return true;
        }
    };

    //Handle form submission
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Prevent form submission if errors
        if (!isFormValid()) {
            return;
        }

        //Prepare form data
        const formData = new FormData();
        formData.append("title", inputValues.title);
        formData.append("description", inputValues.description);
        selectedImages.forEach((image) => {
            formData.append("images", image.file);
            formData.append("names", image.name);
            formData.append("latitudes", image.latitude.toString());
            formData.append("longitudes", image.longitude.toString());
        });

        // Send form data to backend API
        postCollection(userId, formData, (response: AxiosResponse) => {
            console.log(response);
            notify();
            setTimeout(() => {
                navigate(`/${user}/map`);
            }, 4000);
        });
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {isLoggedIn && handleLoggedInUserCheck(user, username) ? (
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
                            <div className="input__container">
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Add a title for your Collection"
                                    className="add__input"
                                    onChange={handleInputChange}
                                    value={inputValues.title}
                                />
                                {errors.title && (
                                    <p className="input__error-msg input__error-msg--add">
                                        Please do not leave field blank
                                    </p>
                                )}
                            </div>
                            <div className="input__container">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Add a description for your Collection"
                                    className="add__input add__input--textarea"
                                    onChange={handleInputChange}
                                    value={inputValues.description}
                                ></textarea>
                                {errors.description && (
                                    <p className="input__error-msg input__error-msg--add">
                                        Please do not leave field blank
                                    </p>
                                )}
                            </div>
                            <h3 className="add__sub-title">Add Images</h3>
                            <div className="input__container">
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
                                {errors.imageFiles && (
                                    <p className="input__error-msg input__error-msg--add">
                                        Please choose images to upload
                                    </p>
                                )}
                            </div>
                            {errors.imageInfo && (
                                <p className="input__error-msg input__error-msg--add">
                                    Please complete all fields for each image
                                </p>
                            )}
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
