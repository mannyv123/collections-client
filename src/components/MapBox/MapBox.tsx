import "./MapBox.scss";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Collections } from "../../types/types";

interface MapBoxProps {
    collections: Collections[];
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBox({ collections }: MapBoxProps): JSX.Element {
    console.log(collections);

    return (
        <section className="map-container">
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 2,
                }}
                style={{ width: "100vw", height: "93.5vh" }}
                mapStyle="mapbox://styles/mapbox/light-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                projection="globe"
            >
                {collections.map((collection) =>
                    collection.collection_images.map((image) => (
                        <Marker
                            key={image.id}
                            longitude={image.longitude}
                            latitude={image.latitude}
                            color="red"
                        />
                    ))
                )}
                {/* <Marker longitude={-122.4} latitude={37.8} color="red" /> */}
            </Map>
        </section>
    );
}

export default MapBox;
