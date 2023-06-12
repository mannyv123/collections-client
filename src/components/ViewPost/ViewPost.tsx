import "./ViewPost.scss";
import { Collections } from "../../types/types";
import { useEffect, useState } from "react";

interface ViewPostProps {
    selected: Collections;
    selectedImgIndex: number;
}

function ViewPost({ selected, selectedImgIndex }: ViewPostProps): JSX.Element {
    // const [currentImgIndex, setCurrentImgIndex] = useState<number>(selectedImgIndex);

    console.log(selected);
    const otherImgs = selected.collection_images.filter(
        (image) => image.id !== selected.collection_images[selectedImgIndex].id
    );

    return (
        <section className="view-post">
            <h3 className="view-post__title">{selected.title}</h3>
            <p>{selected.user_id}</p>
            <div className="view-post__imgs-container">
                <img
                    src={selected.collection_images[selectedImgIndex].imageUrl}
                    alt="selected"
                    className="view-post__selected-img"
                />
                <div className="view-post__other-imgs-container">
                    {otherImgs.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.imageUrl}
                            alt="remaining"
                            className="view-post__other-imgs"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ViewPost;
