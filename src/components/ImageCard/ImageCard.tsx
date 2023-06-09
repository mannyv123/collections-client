import { ChangeEvent } from "react";
import "./ImageCard.scss";

interface ImageData {
    file: File;
    name: string;
    latitude: number;
    longitude: number;
}

interface ImageCardProps {
    // file: File;
    handleNameChange: (file: File, name: string) => void;
    index: number;
    fileData: ImageData;
}

function ImageCard({ handleNameChange, index, fileData }: ImageCardProps): JSX.Element {
    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleNameChange(fileData.file, event.target.value);
    };

    return (
        <div className="img-card">
            <div className="img-card__image"></div>
            <label htmlFor="imgName">Name:</label>
            <input
                type="text"
                name="imgName"
                id="imgName"
                placeholder="Add a name for the Image"
                className="img-card__input"
                onChange={onNameChange}
            />
            <label htmlFor="latitude">Latitude:</label>
            <input
                type="text"
                name="latitude"
                id="latitude"
                placeholder="Input the Latitude"
                className="img-card__input"
            />
            <label htmlFor="longitude">Longitude:</label>
            <input
                type="text"
                name="longitude"
                id="longitude"
                placeholder="Input the Longitude"
                className="img-card__input"
            />
        </div>
    );
}

export default ImageCard;
