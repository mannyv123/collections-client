import "./CollectionPost.scss";
import picIcon from "../../assets/icons/picture-icon.svg";
import likeIcon from "../../assets/icons/like-icon.svg";
import commentIcon from "../../assets/icons/comment-icon.svg";
import testImg1 from "../../assets/images/test-images/DSC_0655.jpg";
import testImg2 from "../../assets/images/test-images/DSC_0703.jpg";
import testImg3 from "../../assets/images/test-images/DSC_0761.jpg";
import testImg4 from "../../assets/images/test-images/DSC_0773.jpg";
import testImg5 from "../../assets/images/test-images/DSC_0794.jpg";
import testImg6 from "../../assets/images/test-images/DSC_0850.jpg";
import testImg7 from "../../assets/images/test-images/DSC_0901.jpg";
import { useEffect, useState } from "react";

function CollectionPost(): JSX.Element {
    // temporary ** need to update to use images from posts
    const [images, setImages] = useState<string[]>([
        //tracks what images to include from the post
        testImg1,
        testImg2,
        testImg3,
        testImg4,
        testImg5,
        testImg6,
        testImg7,
    ]);

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const nextImage = (): void => {
        if (!isAnimating) {
            // setIsAnimating(true);
            setCurrentImageIndex((prevIndex: number) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = (): void => {
        if (!isAnimating) {
            // setIsAnimating(true);
            setCurrentImageIndex((prevIndex: number) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsAnimating(false);
    //     }, 500);

    //     return () => clearTimeout(timer);
    // }, [currentImageIndex]);

    return (
        <div className="collection">
            <div className="collection__details-container">
                <div className="collection__poster-info">
                    <h3 className="collection__title">Collection Title</h3>
                    <p className="collection__user">By **USER**</p>
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
            <div className="collection__img-container">
                {/* <img className="collection__img" src={testImg1} alt="test" />
                <img className="collection__img" src={testImg2} alt="test" />
                <img className="collection__img" src={testImg3} alt="test" />
                <img className="collection__img" src={testImg4} alt="test" />
                <img className="collection__img" src={testImg5} alt="test" />
                <img className="collection__img" src={testImg6} alt="test" />
                <img className="collection__img" src={testImg7} alt="test" /> */}
                <button onClick={prevImage}>Previous</button>
                <img
                    className={`collection__img ${isAnimating ? "collection__img--transitioning" : ""}`}
                    src={images[currentImageIndex]}
                    alt="collection"
                    // onTransitionEnd={() => {
                    //     setIsAnimating(false);
                    //     console.log("hi");
                    // }}
                />
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
}

export default CollectionPost;
