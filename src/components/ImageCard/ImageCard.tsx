import { ChangeEvent, useState } from "react";
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
    handleCoordinatesChange: (file: File, latitude: number, longitude: number) => void;

    fileData: ImageData;
}

function ImageCard({ handleNameChange, handleCoordinatesChange, fileData }: ImageCardProps): JSX.Element {
    const [name, setName] = useState<string>("");
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        handleNameChange(fileData.file, event.target.value);
    };

    const onLatitudeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLatitude(Number(event.target.value));
        handleCoordinatesChange(fileData.file, Number(event.target.value), longitude);
    };

    const onLongitudeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLongitude(Number(event.target.value));
        handleCoordinatesChange(fileData.file, latitude, Number(event.target.value));
    };

    return (
        <div className="img-card">
            <div className="img-card__image">
                <img
                    className="img-card__image-file"
                    src={URL.createObjectURL(fileData.file)}
                    alt="preview"
                />
            </div>
            <label htmlFor="imgName">Name:</label>
            <input
                type="text"
                name="imgName"
                id="imgName"
                placeholder="Add a name for the Image"
                className="img-card__input"
                value={name}
                onChange={onNameChange}
            />
            <label htmlFor="latitude">Latitude:</label>
            <input
                type="text"
                name="latitude"
                id="latitude"
                placeholder="Input the Latitude"
                className="img-card__input"
                value={latitude}
                onChange={onLatitudeChange}
            />
            <label htmlFor="longitude">Longitude:</label>
            <input
                type="text"
                name="longitude"
                id="longitude"
                placeholder="Input the Longitude"
                className="img-card__input"
                value={longitude}
                onChange={onLongitudeChange}
            />
        </div>
    );
}

export default ImageCard;
