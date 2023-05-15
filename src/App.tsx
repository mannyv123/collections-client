import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/:userId" element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
