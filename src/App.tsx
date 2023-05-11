import "./App.scss";
import MapBox from "./components/MapBox/MapBox";
import PageHeader from "./components/PageHeader/PageHeader";

function App() {
    return (
        <div className="App">
            <PageHeader />
            <MapBox />
        </div>
    );
}

export default App;
