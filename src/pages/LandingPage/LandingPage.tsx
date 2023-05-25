import { useEffect, useState } from "react";
import ViewCollections from "../../components/ViewCollections/ViewCollections";
import "./LandingPage.scss";
import axios from "axios";
import { apiUrl } from "../../App";

//Type Definitions
interface CollectionImages {
    id: string;
    title: string;
    image: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
}

interface Collections {
    id: string;
    title: string;
    description: string;
    user_id: string;
    collection_images: CollectionImages[];
}

function LandingPage(): JSX.Element {
    const [collections, setCollections] = useState<Collections[]>([]);
    useEffect(() => {
        getCollections();
    }, []);

    async function getCollections() {
        try {
            const response = await axios.get(`${apiUrl}/collections`);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            <ViewCollections />
        </main>
    );
}

export default LandingPage;
