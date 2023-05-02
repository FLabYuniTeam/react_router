import { Route, Routes } from "react-router-dom";
import Post from "./post";
import Home from "./home";

export default function Root() {
  return (
    <>
      <header>루트 페이지입니다!!</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <footer>Footer입니다!</footer>
    </>
  );
}
