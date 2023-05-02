import { Link, Route, Routes } from "react-router-dom";
import Post from "./post";
import Home from "./home";

export default function Root() {
  return (
    <>
      <header>
        <nav className="flex justify-around pb-3 mt-3 border-b border-gray">
          <Link className="tossLogo flex" to="/">
            <img
              src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662515801/noticon/dtalt5gl3xkddalhat8o.png"
              alt="toss-icon"
              className="w-8"
            />
            <button className="text-xl mt-1">
              <b>toss </b>
              tech
            </button>
          </Link>
          <div className="text-sm">
            <button className="p-2">디자인</button>
            <button className="ml-4">개발</button>
            <button className="p-1 pl-2 pr-2 ml-7 bg-blue-500 rounded text-white">
              채용 바로가기
            </button>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <footer>Footer입니다!</footer>
    </>
  );
}
