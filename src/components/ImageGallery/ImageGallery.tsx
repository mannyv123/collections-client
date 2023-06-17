import "./ImageGallery.scss";
import { Collections } from "../../types/types";

interface ImageGalleryProps {
    collections: Collections[];
}

function ImageGallery({ collections }: ImageGalleryProps): JSX.Element {
    console.log(collections);
    return (
        <section className="gallery">
            <h1 className="gallery__title">Image Gallery</h1>
            <div className="gallery__imgs-container">
                {collections.map((collection) =>
                    collection.collection_images.map((image) => (
                        <img key={image.id} src={image.imageUrl} alt="" className="gallery__img" />
                    ))
                )}
            </div>
        </section>
    );
}

export default ImageGallery;
