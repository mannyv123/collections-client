import "./ImageGallery.scss";
import { Collections } from "../../types/types";

interface ImageGalleryProps {
    collections: Collections[];
}

function ImageGallery({ collections }: ImageGalleryProps): JSX.Element {
    console.log(collections);
    return (
        <div>
            <h1>Image Gallery</h1>
            <div className="gallery__imgs-container">{}</div>
        </div>
    );
}

export default ImageGallery;
