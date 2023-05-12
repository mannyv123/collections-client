import { useState } from "react";
import "./ViewSwitch.scss";

function ViewSwitch(): JSX.Element {
    const [map, setMap] = useState<boolean>(true);

    return (
        <label htmlFor="view" className="switch">
            Map or List View
            <div className={`switch__container ${map ? "" : "switch__container--list"}`}>
                <div className="switch__item"></div>
            </div>
            <input
                type="checkbox"
                name="view"
                id="view"
                className="switch__input"
                onChange={() => setMap(!map)}
            />
        </label>
    );
}

export default ViewSwitch;
