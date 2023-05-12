import "./App.scss";

import PageHeader from "./components/PageHeader/PageHeader";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
    return (
        <div className="App">
            <PageHeader />
            <LandingPage />
        </div>
    );
}

export default App;
