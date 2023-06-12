import "./ViewPost.scss";
import { Collections } from "../../types/types";
import { useEffect, useState, useRef, MouseEventHandler } from "react";
import FullscreenModal from "../FullscreenModal/FullscreenModal";
import { CollectionImages } from "../../types/types";

interface ViewPostProps {
    selected: Collections;
    selectedImgIndex: number;
}

function ViewPost({ selected, selectedImgIndex }: ViewPostProps): JSX.Element {
    // const [currentImgIndex, setCurrentImgIndex] = useState<number>(selectedImgIndex);
    const [showImageIndex, setShowImageIndex] = useState<number>(0);
    const fullImageRef = useRef<HTMLDialogElement>(null);

    console.log(selected);
    const otherImgs = selected.collection_images.filter(
        (image) => image.id !== selected.collection_images[selectedImgIndex].id
    );

    const openModal = (image: CollectionImages) => {
        setShowImageIndex(selected.collection_images.indexOf(image));
        fullImageRef.current?.showModal();
    };

    console.log(showImageIndex);

    return (
        <>
            <section className="view-post">
                <h3 className="view-post__title">{selected.title}</h3>
                <p>{selected.user_id}</p>
                <div className="view-post__imgs-container">
                    <img
                        src={selected.collection_images[selectedImgIndex].imageUrl}
                        alt="selected"
                        className="view-post__selected-img"
                        onClick={() => openModal(selected.collection_images[selectedImgIndex])}
                    />
                    <div className="view-post__other-imgs-container">
                        {otherImgs.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.imageUrl}
                                alt="remaining"
                                className="view-post__other-imgs"
                                onClick={() => openModal(selected.collection_images[index])}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <FullscreenModal
                fullImageRef={fullImageRef}
                selectedPost={selected}
                showImageIndex={showImageIndex}
            />
        </>
    );
}

export default ViewPost;
