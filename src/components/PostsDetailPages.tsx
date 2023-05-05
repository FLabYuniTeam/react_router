import React from "react";
import { PostsDetail } from "../routes/post";

export default function PostsDetailPages(postDetail: PostsDetail) {
  return (
    <div className="m-auto w-11/12 md:w-3/4 xl:w-4/5">
      <img className="rounded-2xl" src={postDetail.imageUrl} alt="" />
      <h1 className="font-bold text-5xl mt-6 ml-3">{postDetail.title}</h1>
      <div className="flex mt-5">
        <img
          className="ml-2 mr-3 w-12 rounded-full"
          src={postDetail.profileImage}
          alt=""
        />
        <div>
          <div>{postDetail.writer}</div>
          <div className="text-gray-400">{postDetail.date}</div>
        </div>
      </div>
      <div className="mt-20">
        <p>{postDetail.contents}</p>
      </div>
    </div>
  );
}
