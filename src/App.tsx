import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddCollection from "./pages/AddCollection/AddCollection";
import { AuthProvider } from "./utils/authContext";

export const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
    throw new Error("No API_URL set in environment variable. Please update.");
}

function App(): JSX.Element {
    return (
        <div className="App">
            <div className="mobile">
                <p className="mobile__message">
                    Note that Collections is not available for mobile or tablet formats. Please use a Desktop
                    to access the application.
                </p>
            </div>
            <div className="desktop">
                <BrowserRouter>
                    <AuthProvider>
                        <PageHeader />
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/home" element={<Navigate to="/" />} />
                            <Route path="/:username/*" element={<ProfilePage />} />
                            <Route path="/:username/add" element={<AddCollection />} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
