import "mapbox-gl/dist/mapbox-gl.css";
import "./MapBox.scss";
import Map, { MapboxEvent, Marker, MapRef } from "react-map-gl";
import { Collections } from "../../types/types";
import { CSSProperties, useEffect, useRef, useState } from "react";
import ViewPost from "../ViewPost/ViewPost";

interface MapBoxProps {
    collections: Collections[];
}
interface View {
    latitude: number;
    longitude: number;
    zoom: number;
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBox({ collections }: MapBoxProps): JSX.Element {
    const [viewPost, setViewPost] = useState<Boolean>(false);
    // const [currentPos, setCurrentPos] = useState({ latitude: 37.8, longitude: -122.4, zoom: 2 });
    const [viewState, setViewState] = useState<View>({
        latitude: 49.285283,
        longitude: -123.115044,
        zoom: 2,
    });
    const [selected, setSelected] = useState<Collections>();
    const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
    const mapRef = useRef<MapRef | null>(null);

    console.log(viewPost);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = (): void => {
        function success(position: GeolocationPosition): void {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setViewState({ latitude, longitude, zoom: 2 });
        }

        function error(): void {
            setViewState({ latitude: 49.285283, longitude: -123.115044, zoom: 2 });
        }

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    const handleMarkerClick = (
        event: MapboxEvent<MouseEvent>,
        imageId: string,
        collectionId: string,
        imageLng: number,
        imageLat: number
    ) => {
        event.originalEvent.stopPropagation();
        console.log("I clicked it", imageId, collectionId);
        const selectedCollection = collections.find((collection) => collection.id === collectionId)!;
        const selectedImageIndex = selectedCollection.collection_images.findIndex(
            (image) => image.id === imageId
        );
        setSelected(selectedCollection);
        setSelectedImgIndex(selectedImageIndex);
        // setViewState({ latitude: imageLat, longitude: imageLng, zoom: 4 });
        mapRef.current?.flyTo({ center: [imageLng, imageLat], duration: 2000 });
        if (!viewPost) setViewPost(true);
    };
    // console.log(currentPos);

    return (
        <section className="map-container">
            {viewPost && selected && <ViewPost selected={selected} selectedImgIndex={selectedImgIndex} />}
            <div
                onClick={() => {
                    setViewPost(false);
                }}
                className={`map__globe-container ${viewPost ? "map__globe-container--viewpost" : ""}`}
            >
                <Map
                    // initialViewState={currentPos}
                    // {...currentPos}
                    {...viewState}
                    onLoad={getLocation}
                    onMove={(evt) => setViewState(evt.viewState)}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                    }}
                    mapStyle="mapbox://styles/mapbox/light-v11"
                    mapboxAccessToken={MAPBOX_TOKEN}
                    projection="globe"
                    ref={mapRef}
                    // styleDiffing={true}
                >
                    {collections.map((collection) =>
                        collection.collection_images.map((image) => (
                            <Marker
                                key={image.id}
                                style={{ cursor: "pointer" }}
                                longitude={image.longitude}
                                latitude={image.latitude}
                                color="red"
                                onClick={(event) =>
                                    handleMarkerClick(
                                        event,
                                        image.id,
                                        collection.id,
                                        image.longitude,
                                        image.latitude
                                    )
                                }
                            />
                        ))
                    )}
                    {/* <Marker longitude={-122.4} latitude={37.8} color="red" /> */}
                </Map>
            </div>
        </section>
    );
}

export default MapBox;
