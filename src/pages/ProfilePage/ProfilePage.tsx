// import { useState } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import "./ProfilePage.scss";
import ViewCollections from "../../components/ViewCollections/ViewCollections";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Collections } from "../../types/types";
import { apiUrl } from "../../App";

function ProfilePage(): JSX.Element {
    //need to update
    const [collections, setCollections] = useState<Collections[]>([]);
    useEffect(() => {
        getCollections();
    }, []);

    async function getCollections() {
        try {
            const response: AxiosResponse<Collections[]> = await axios.get(`${apiUrl}/collections`);
            setCollections(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    //need to update end

    return (
        <section className="profile">
            <div className="profile__header">
                <div className="profile__cover-img">
                    <div className="profile__img"></div>
                    <h1 className="profile__title">Welcome **USER**</h1>
                </div>
                <div className="profile__sub-nav">
                    <ul className="profile__sub-nav-list">
                        <li className="profile__nav-item">
                            <Link className="profile__nav-link" to="/:userId/map">
                                Map
                            </Link>
                        </li>
                        <li className="profile__nav-item">
                            <Link className="profile__nav-link" to="/:userId/gallery">
                                Gallery
                            </Link>
                        </li>
                        <li className="profile__nav-item">
                            <Link className="profile__nav-link" to="/:userId/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="profile__add-collection">
                        <p>Add a Collection</p>
                    </div>
                </div>
            </div>
            <div className="profile__content">
                {/* Map */}
                {/* Gallery */}
                {/* About */}
                {/* <Outlet /> */}

                <Routes>
                    <Route path="map" element={<ViewCollections collections={collections} />} />
                </Routes>
            </div>
        </section>
    );
}

export default ProfilePage;
