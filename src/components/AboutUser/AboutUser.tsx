import "./AboutUser.scss";

interface AboutUserProps {
    about?: string;
    userFirst?: string;
    userLast?: string;
}

function AboutUser({ about, userFirst, userLast }: AboutUserProps): JSX.Element {
    return (
        <div className="about">
            <h1 className="about__title">About {`${userFirst} ${userLast}`}</h1>
            <p className="about__text">{about}</p>
        </div>
    );
}

export default AboutUser;
