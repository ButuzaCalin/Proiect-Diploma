import "./App.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import EventCreationPage from "./pages/EventCreationPage";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/create" element={<EventCreationPage />} />
        <Route path="/favs" element={<FavoritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
