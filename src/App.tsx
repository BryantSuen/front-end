import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/RequiredAuth";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";
import NotfoundPage from "./pages/NotfoundPage";
import PermissionDeniedPage from "./pages/PermissionDeniedPage";
import ArticlePage from "./pages/ArticlePage";
import LoginPage from "./pages/LoginPage";
const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="App_body">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin/*"
            element={
              <RequireAuth>
                <AdminPage />
              </RequireAuth>
              // <AdminPage/>
            }
          />
          <Route path="/unauthed" element={<PermissionDeniedPage />} />
          <Route path="/*" element={<NotfoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
