// import { useState } from "react";
import { Link, Outlet, Routes, Route, useParams } from "react-router-dom";
import "./ProfilePage.scss";
import ViewCollections from "../../components/ViewCollections/ViewCollections";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import AboutUser from "../../components/AboutUser/AboutUser";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Collections, UserProfile } from "../../types/types";
import { apiUrl } from "../../App";
import { getUserProfile } from "../../utils/api";

function ProfilePage(): JSX.Element {
    const [userProfile, setUserProfile] = useState<UserProfile>();

    //need to update
    // const [collections, setCollections] = useState<Collections[]>([]);

    // useEffect(() => {
    //     getCollections();
    // }, []);

    // async function getCollections() {
    //     try {
    //         const response: AxiosResponse<Collections[]> = await axios.get(`${apiUrl}/collections`);
    //         setCollections(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    //need to update end
    const { username } = useParams();

    useEffect(() => {
        if (username) {
            getUserProfile(username, (response: AxiosResponse) => {
                setUserProfile(response.data[0]);
            });
        }
    }, [username]);

    console.log(userProfile);

    return (
        <section className="profile">
            <div className="profile__header">
                <div
                    className="profile__cover-img-container"
                    style={{
                        backgroundImage: `url(${userProfile?.cover_img_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="profile__img-container">
                        <img
                            src={userProfile ? userProfile.profile_img_url : ""}
                            alt="profile"
                            className="profile__img"
                        />
                    </div>
                    <h1 className="profile__title">{userProfile ? userProfile.username : ""}</h1>
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
                    {/* <Route path="map" element={<ViewCollections collections={collections} />} /> */}
                    <Route path="gallery" element={<ImageGallery />} />
                    <Route path="about" element={<AboutUser />} />
                </Routes>
            </div>
        </section>
    );
}

export default ProfilePage;
