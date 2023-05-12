import "./ViewSwitch.scss";

interface ViewSwitchProps {
    map: boolean;
    setMap(map: boolean): void;
}

function ViewSwitch({ map, setMap }: ViewSwitchProps): JSX.Element {
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
