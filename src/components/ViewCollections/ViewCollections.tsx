import "./ViewCollections.scss";
import { useState } from "react";
import ViewSwitch from "../ViewSwitch/ViewSwitch";
import MapBox from "../MapBox/MapBox";
import ListView from "../ListView/ListView";
import { Collections } from "../../types/types";

interface ViewCollectionsProps {
    collections: Collections[];
}

function ViewCollections({ collections }: ViewCollectionsProps): JSX.Element {
    const [map, setMap] = useState<boolean>(false);

    return (
        <div className="view-collections">
            <ViewSwitch map={map} setMap={setMap} />
            {map ? <MapBox collections={collections} /> : <ListView collections={collections} />}
        </div>
    );
}

export default ViewCollections;
