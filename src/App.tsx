import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ViewCollections from "./components/ViewCollections/ViewCollections";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import AboutUser from "./components/AboutUser/AboutUser";

const Test = () => {
    return <div>Hello</div>;
};

function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/:userId" element={<ProfilePage />}>
                        <Route path="/:userId/map" element={<ViewCollections />} />
                        <Route path="/:userId/gallery" element={<ImageGallery />} />
                        <Route path="/:userId/about" element={<AboutUser />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
