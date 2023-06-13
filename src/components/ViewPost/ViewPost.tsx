import "./ViewPost.scss";
import { Collections } from "../../types/types";
import { useState, useRef, useEffect } from "react";
import FullscreenModal from "../FullscreenModal/FullscreenModal";
import { CollectionImages } from "../../types/types";
import { getUsername } from "../../utils/api";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

interface ViewPostProps {
    selected: Collections;
    selectedImgIndex: number;
}

function ViewPost({ selected, selectedImgIndex }: ViewPostProps): JSX.Element {
    const [showImageIndex, setShowImageIndex] = useState<number>(0);
    const [username, setUsername] = useState<string>("");
    const fullImageRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (selected) {
            getUsername(selected.user_id, (response: AxiosResponse) => {
                setUsername(response.data[0].username);
            });
        }
    }, [selected]);

    const otherImgs = selected.collection_images.filter(
        (image) => image.id !== selected.collection_images[selectedImgIndex].id
    );

    const openModal = (image: CollectionImages) => {
        setShowImageIndex(selected.collection_images.indexOf(image));
        fullImageRef.current?.showModal();
    };

    return (
        <>
            <section className="view-post">
                <h3 className="view-post__title">{selected.title}</h3>
                <Link to={`/${username}/map`} className="view-post__username-link">
                    <p className="view-post__username">{username}</p>
                </Link>
                <div className="view-post__imgs-container">
                    <img
                        src={selected.collection_images[selectedImgIndex].imageUrl}
                        alt="selected"
                        className="view-post__selected-img"
                        onClick={() => openModal(selected.collection_images[selectedImgIndex])}
                    />
                    <div className="view-post__other-imgs-container">
                        {otherImgs.map((image) => (
                            <img
                                key={image.id}
                                src={image.imageUrl}
                                alt="remaining"
                                className="view-post__other-imgs"
                                onClick={() =>
                                    openModal(
                                        selected.collection_images.find(
                                            (currImage) => currImage.id === image.id
                                        )!
                                    )
                                }
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
