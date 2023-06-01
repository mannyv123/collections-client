import "./ViewPost.scss";
import { Collections } from "../../types/types";
import { useState } from "react";

interface ViewPostProps {
    selected: Collections;
    selectedImgIndex: number;
}

function ViewPost({ selected, selectedImgIndex }: ViewPostProps): JSX.Element {
    // const [currentImgIndex, setCurrentImgIndex] = useState<number>(selectedImgIndex);
    console.log(selected);

    return (
        <section className="view-post">
            <h3 className="view-post__title">{selected.title}</h3>
            <p>{selected.user_id}</p>
            <img
                src={selected.collection_images[selectedImgIndex].imageUrl}
                alt="selected"
                className="view-post__selected-img"
            />
        </section>
    );
}

export default ViewPost;
