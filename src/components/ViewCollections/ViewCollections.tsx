import "./ViewCollections.scss";
import { useState } from "react";
import ViewSwitch from "../ViewSwitch/ViewSwitch";
import MapBox from "../MapBox/MapBox";

function ViewCollections(): JSX.Element {
    const [map, setMap] = useState<boolean>(true);
    return (
        <div>
            <ViewSwitch map={map} setMap={setMap} />
            <MapBox />
        </div>
    );
}

export default ViewCollections;
