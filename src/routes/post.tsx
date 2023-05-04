export type Posts = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
};

export type PostsDetail = {
  id: number;
  imageUrl: string;
};

export default function Post() {
  return (
    <>
      <div id="post-page">post 페이지입니다.</div>
    </>
  );
}
