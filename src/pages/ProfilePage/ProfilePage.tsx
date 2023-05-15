import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./ProfilePage.scss";
import ViewCollections from "../../components/ViewCollections/ViewCollections";

function ProfilePage(): JSX.Element {
    const [view, setView] = useState<string>("map");

    return (
        <section className="profile">
            <div className="profile__header">
                <div className="profile__cover-img">
                    <div className="profile__img"></div>
                    <h1 className="profile__title">Welcome **USER**</h1>
                </div>
                <ul className="profile__sub-nav">
                    <li className="profile__nav-item">Map</li>
                    <li className="profile__nav-item">Gallery</li>
                    <li className="profile__nav-item">About</li>
                </ul>
            </div>
            <div className="profile__content">
                {/* Map */}
                {/* Gallery */}
                {/* About */}
                <Outlet />
            </div>
        </section>
    );
}

export default ProfilePage;
