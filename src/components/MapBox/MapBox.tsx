import "./MapBox.scss";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBox(): JSX.Element {
    return (
        <section className="map-container">
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 2,
                }}
                style={{ width: 800, height: 600 }}
                mapStyle="mapbox://styles/mapbox/light-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                projection="globe"
            >
                <Marker longitude={-122.4} latitude={37.8} color="red" />
            </Map>
        </section>
    );
}

export default MapBox;
