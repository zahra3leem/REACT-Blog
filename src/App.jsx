// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Logout from './Pages/Logout';
import CreateNewPost from "./Pages/CreateNewPost";
import Edit from "./Pages/Edit";
import PostDetails from './Pages/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Layout />} />
        <Route path="header" element={<Header />} />
        <Route path="log" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="logout" element={<Logout />} />
        <Route path="creat" element={<CreateNewPost />} />
        <Route path="details/:id" element={<PostDetails />} />
        <Route path="editt/:id" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
