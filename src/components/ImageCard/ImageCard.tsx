import "./ImageCard.scss";

// interface ImageCardProps {
//     file: File;
//     handleNameChange:
// }

function ImageCard(): JSX.Element {
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
