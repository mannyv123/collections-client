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
import { getUserPosts, getUserProfile } from "../../utils/api";
import { useAuth } from "../../utils/authContext";

function ProfilePage(): JSX.Element {
    const [userProfile, setUserProfile] = useState<UserProfile>();
    const [userCollections, setUserCollections] = useState<Collections[]>([]);

    const { isLoggedIn } = useAuth();
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
            getUserProfile(username, (response: UserProfile) => {
                setUserProfile(response);
            });
        }
    }, [username]);

    useEffect(() => {
        if (userProfile) {
            getUserPosts(userProfile.id, (response: Collections[]) => {
                setUserCollections(response);
            });
        }
    }, [userProfile]);

    console.log(userProfile);
    console.log(userCollections);

    return (
        <section className="profile">
            <div className="profile__header">
                <div className="profile__img-container">
                    <div className="profile__cover-img-container">
                        <img
                            src={userProfile ? userProfile.cover_img_url : ""}
                            alt="cover"
                            className="profile__cover-img"
                        />
                    </div>
                    <div className="profile__profile-img-container">
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
                            <Link className="profile__nav-link" to={`/${username}/map`}>
                                Map
                            </Link>
                        </li>
                        <li className="profile__nav-item">
                            <Link className="profile__nav-link" to={`/${username}/gallery`}>
                                Gallery
                            </Link>
                        </li>
                        <li className="profile__nav-item">
                            <Link className="profile__nav-link" to={`/${username}/about`}>
                                About
                            </Link>
                        </li>
                    </ul>
                    {isLoggedIn && (
                        <Link
                            to={`/${username}/add`}
                            className="profile__add-collection profile__add-collection--link"
                        >
                            <div className="profile__add-collection">
                                <p>Add a Collection</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div className="profile__content">
                {/* Map */}
                {/* Gallery */}
                {/* About */}
                {/* <Outlet /> */}

                <Routes>
                    <Route path="map" element={<ViewCollections collections={userCollections} />} />
                    <Route path="gallery" element={<ImageGallery collections={userCollections} />} />
                    <Route
                        path="about"
                        element={
                            <AboutUser
                                about={userProfile?.about}
                                userFirst={userProfile?.first_name}
                                userLast={userProfile?.last_name}
                            />
                        }
                    />
                </Routes>
            </div>
        </section>
    );
}

export default ProfilePage;
