import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <ul>
      <li>
        <Link to="/post/1">post1</Link>
      </li>
      <li>
        <Link to="/post/2">post2</Link>
      </li>
    </ul>
  );
}
