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
    );
}

export default App;
