import "./ViewSwitch.scss";

function ViewSwitch(): JSX.Element {
    const handleSwitchChange = () => {
        console.log("It worked");
    };
    return (
        <label htmlFor="view" className="switch">
            Map or List View
            <div className="switch__container">
                <div className="switch__item"></div>
            </div>
            <input
                type="checkbox"
                name="view"
                id="view"
                className="switch__input"
                onChange={handleSwitchChange}
            />
        </label>
    );
}

export default ViewSwitch;
