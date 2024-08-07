import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = (article) => {
  const [articles, setArticles] = useState([]);
  // const handlechange = ([change, setchange] = setchange());

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=1&per_page=9"
    );
    const data = await response.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);
  console.log("data", articles);
  return (
    <>
      <Link href={"/blog" + article.id}>
        <div className="container m-auto flex flex-col gap-8 mb-24">
          <h1 className="text-2xl font-bold text-black font-sans">
            All blog post
          </h1>
          <div className="grid grid-cols-3 gap-5">
            {articles.map((data) => {
              return (
                <div className="p-4 flex-col gap4 border rounded-xl">
                  <img
                    className="h-[360px] w-[100%] object-center object-cover rounded-xl"
                    src={data.social_image}
                    alt=""
                  />
                  <div>
                    <span className="py-1 px-3 bg-[#4b6bfb0d] rounded-md  text-[#4B6BFB] text-xs">
                      {data.user.username}
                    </span>
                  </div>
                  <p className="text-2xl font-semibold">{data.title}</p>
                  <p className="text-[#97989F]">{data.published_at}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button
              className="border text-[#696A75] py-3 px-5 rounded-xl "
              // onClick={() => {
              //   setchange();
              // }}
            >
              Load More
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Blog;
