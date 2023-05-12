import MapBox from "../../components/MapBox/MapBox";
import ViewSwitch from "../../components/ViewSwitch/ViewSwitch";
import "./LandingPage.scss";

function LandingPage(): JSX.Element {
    return (
        <section>
            <ViewSwitch />
            <MapBox />
        </section>
    );
}

export default LandingPage;
