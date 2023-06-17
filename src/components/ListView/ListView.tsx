import CollectionPost from "../CollectionPost/CollectionPost";
import "./ListView.scss";
import { Collections } from "../../types/types";

interface ListViewProps {
    collections: Collections[];
}

function ListView({ collections }: ListViewProps): JSX.Element {
    return (
        <section className="list-view">
            <h1 className="list-view__title">Recent Collections</h1>
            <div className="list-view__container">
                {collections.map((collection) => (
                    <CollectionPost key={collection.id} collection={collection} />
                ))}
            </div>
        </section>
    );
}

export default ListView;
