import { useEffect, useState } from "react";
import ViewCollections from "../../components/ViewCollections/ViewCollections";
import "./LandingPage.scss";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../App";
import { Collections } from "../../types/types";

function LandingPage(): JSX.Element {
    const [collections, setCollections] = useState<Collections[]>([]);

    useEffect(() => {
        getCollections();
    }, []);

    async function getCollections() {
        try {
            const response: AxiosResponse<Collections[]> = await axios.get(`${API_URL}/collections`);
            setCollections(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            <ViewCollections collections={collections} />
        </main>
    );
}

export default LandingPage;
