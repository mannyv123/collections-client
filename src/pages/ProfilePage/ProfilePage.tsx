import "./ProfilePage.scss";

function ProfilePage(): JSX.Element {
    return (
        <section className="profile">
            <div className="profile__header">
                <div className="profile__cover-img">
                    <div className="profile__img"></div>
                    <h1>Welcome **USER**</h1>
                </div>
                <ul className="profile__sub-nav">
                    <li className="profile_nav-item">Map</li>
                    <li className="profile_nav-item">Posts</li>
                    <li className="profile_nav-item">Gallery</li>
                    <li className="profile_nav-item">About</li>
                </ul>
            </div>
        </section>
    );
}

export default ProfilePage;
