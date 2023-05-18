import "./CollectionPost.scss";

function CollectionPost(): JSX.Element {
    return (
        <div className="collection">
            <div className="collection__details-container">
                <div className="collection__poster-info">
                    <h3 className="collection__title">Collection Title</h3>
                    <p className="collection__user">By **USER**</p>
                </div>
                <div className="collection__analytics">
                    <div className="collection__num-imgs">IMGS</div>
                    <div className="collection__likes">LIKES</div>
                    <div className="collection__comments">COMNTS</div>
                </div>
            </div>
        </div>
    );
}

export default CollectionPost;
