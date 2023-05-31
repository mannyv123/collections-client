import "./ViewPost.scss";
import { Collections } from "../../types/types";

interface ViewPostProps {
    selected: Collections;
}

function ViewPost({ selected }: ViewPostProps): JSX.Element {
    return (
        <section className="view-post">
            <h3 className="view-post__title">{selected.title}</h3>
            <p>{selected.user_id}</p>
        </section>
    );
}

export default ViewPost;
