import { useEffect } from "react";
import ViewCollections from "../../components/ViewCollections/ViewCollections";
import "./LandingPage.scss";
import axios from "axios";
import { apiUrl } from "../../App";

function LandingPage(): JSX.Element {
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
