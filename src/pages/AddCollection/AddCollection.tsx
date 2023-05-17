import ImageCard from "../../components/ImageCard/ImageCard";
import "./AddCollection.scss";

function AddCollection(): JSX.Element {
    return (
        <section className="add">
            <h1 className="add__title">Add a Collection</h1>
            <div className="add__container">
                <form action="submit" className="add__form">
                    <h3 className="add__sub-title">Add Collection Details</h3>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Add a title for your Collection"
                        className="add__input"
                    />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Add a description for your Collection"
                        className="add__input add__input--textarea"
                    ></textarea>
                    <h3 className="add__sub-title">Add Images</h3>
                    <div className="add__images-container">
                        {/* Temporary */}
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AddCollection;
