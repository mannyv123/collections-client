import "./ViewSwitch.scss";
import { MdOutlineRoom, MdViewModule } from "react-icons/md";

interface ViewSwitchProps {
    map: boolean;
    setMap(map: boolean): void;
}

function ViewSwitch({ map, setMap }: ViewSwitchProps): JSX.Element {
    return (
        <label htmlFor="view" className="switch">
            <div className="switch__container">
                <MdOutlineRoom className="switch__icon" />
                <MdViewModule className="switch__icon" />
                <div className={`switch__item ${map ? "switch__item--map" : "switch__item--list"}`}></div>
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
