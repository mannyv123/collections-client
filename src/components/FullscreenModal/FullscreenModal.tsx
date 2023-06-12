import { Collections } from "../../types/types";
import "./FullscreenModal.scss";
import { Dispatch, FormEvent, RefObject, SetStateAction, useEffect, useState } from "react";

interface FullscreenModalProps {
    fullImageRef: RefObject<HTMLDialogElement>;
    selectedPost: Collections;
    showImageIndex: number;
}

function FullscreenModal({ fullImageRef, selectedPost, showImageIndex }: FullscreenModalProps): JSX.Element {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(showImageIndex);

    useEffect(() => {
        setCurrentImageIndex(showImageIndex);
    }, [showImageIndex]);

    const nextImage = (): void => {
        setCurrentImageIndex((prevIndex: number) =>
            prevIndex === selectedPost.collection_images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = (): void => {
        setCurrentImageIndex((prevIndex: number) =>
            prevIndex === 0 ? selectedPost.collection_images.length - 1 : prevIndex - 1
        );
    };

    return (
        <dialog ref={fullImageRef}>
            <img src={selectedPost.collection_images[currentImageIndex].imageUrl} alt="current" />
        </dialog>
    );
}

export default FullscreenModal;
