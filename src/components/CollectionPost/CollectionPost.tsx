import "./CollectionPost.scss";
import picIcon from "../../assets/icons/picture-icon.svg";
import likeIcon from "../../assets/icons/like-icon.svg";
import commentIcon from "../../assets/icons/comment-icon.svg";
import { useEffect, useState } from "react";
import { Collections } from "../../types/types";

interface CollectionPostProps {
    collection: Collections;
}

function CollectionPost({ collection }: CollectionPostProps): JSX.Element {
    console.log("post", collection);
    console.log("image data", collection.collection_images);

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const nextImage = (): void => {
        if (!isAnimating) {
            // setIsAnimating(true);
            setCurrentImageIndex((prevIndex: number) =>
                prevIndex === collection.collection_images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = (): void => {
        if (!isAnimating) {
            // setIsAnimating(true);
            setCurrentImageIndex((prevIndex: number) =>
                prevIndex === 0 ? collection.collection_images.length - 1 : prevIndex - 1
            );
        }
    };

    return (
        <div className="collection">
            <div
                className="collection__bg-image"
                style={{
                    backgroundImage: `url(${collection.collection_images[currentImageIndex].imageUrl})`,
                }}
            >
                <div className="collection__details-container">
                    <div className="collection__poster-info">
                        <h3 className="collection__title">{collection.title}</h3>
                        <p className="collection__user">{collection.user_id}</p>
                    </div>
                    <div className="collection__img-nav">
                        <div onClick={prevImage} className="collecton__btn">
                            P
                        </div>
                        <div onClick={nextImage} className="collecton__btn">
                            N
                        </div>
                    </div>
                    <div className="collection__analytics">
                        <div className="collection__icon-container">
                            <img src={picIcon} alt="count" className="collection__icon" />
                            <p>6</p>
                        </div>
                        <div className="collection__icon-container">
                            <img src={likeIcon} alt="likes" className="collection__icon" />
                            <p>9</p>
                        </div>
                        <div className="collection__icon-container">
                            <img src={commentIcon} alt="comments" className="collection__icon" />
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionPost;
