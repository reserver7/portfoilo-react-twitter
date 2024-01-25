import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "pages/home";
import PostListPage from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import Postedit from "pages/posts/edit";
import ProfilePage from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import SearchPage from "pages/search";
import NotificationsPage from "pages/notifications";
import LoginPage from "pages/users/login";
import SignupPage from "pages/users/signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<Postedit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path="/users/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
