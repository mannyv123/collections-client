import "./CollectionPost.scss";
import testImg1 from "../../assets/images/test-images/DSC_0655.jpg";
import testImg2 from "../../assets/images/test-images/DSC_0703.jpg";
import testImg3 from "../../assets/images/test-images/DSC_0761.jpg";
import testImg4 from "../../assets/images/test-images/DSC_0773.jpg";
import testImg5 from "../../assets/images/test-images/DSC_0794.jpg";
import testImg6 from "../../assets/images/test-images/DSC_0850.jpg";
import testImg7 from "../../assets/images/test-images/DSC_0901.jpg";

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
            <div className="collection__img-container">
                <img className="collection__img" src={testImg1} alt="test" />
                <img className="collection__img" src={testImg2} alt="test" />
                <img className="collection__img" src={testImg3} alt="test" />
                <img className="collection__img" src={testImg4} alt="test" />
                <img className="collection__img" src={testImg5} alt="test" />
                <img className="collection__img" src={testImg6} alt="test" />
                <img className="collection__img" src={testImg7} alt="test" />
            </div>
        </div>
    );
}

export default CollectionPost;
