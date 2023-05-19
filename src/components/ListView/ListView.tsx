import CollectionPost from "../CollectionPost/CollectionPost";
import "./ListView.scss";

function ListView(): JSX.Element {
    return (
        <section className="list-view">
            <h1 className="list-view__title">Recent Collections</h1>
            <div className="list-view__container">
                {/* temporary */}
                <CollectionPost />
                <CollectionPost />
                <CollectionPost />
                <CollectionPost />
                {/* temporary */}
            </div>
        </section>
    );
}

export default ListView;
