import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/provider/sreach-provider";

const BlogData = () => {
  const { searchValue, articles, handleLoadmore } = useContext(SearchContext);
  console.log("dasdadsa", articles);
  const finder = articles?.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // const [articles, setArticles] = useState([]);
  // const [change, setchange] = useState(0);
  // const [count, setCount] = useState(1);

  // const getArticleData = async () => {
  //   const response = await fetch(
  //     `https://dev.to/api/articles?page=${count}&per_page=9`
  //   );
  //   const data = await response.json();
  //   setArticles((prevArticles) => {
  //     console.log("prevArticles", prevArticles);
  //     // Check if the articles are already present
  //     const newArticles = data.filter(
  //       (article) =>
  //         !prevArticles.some((prevArticle) => prevArticle.id === article.id)
  //     );
  //     return [...prevArticles, ...newArticles];
  //   });
  // };
  // useEffect(() => {
  //   getArticleData();
  // }, [count]);

  return (
    <>
      <div className="container m-auto flex flex-col gap-8 mb-24">
        <h1 className="text-2xl font-bold text-black font-sans">
          All blog post
        </h1>
        <nav className="flex justify-between font-bold text-xs">
          <dev className="flex gap-5 font-bold text-xs">
            <a href="">All</a>
            <a href="">Design</a>
            <a href="">Travel</a>
            <a href="">Fashion</a>
            <a href="">Technology</a>
            <a href="">Branding</a>
          </dev>
          <a href="">View All</a>
        </nav>
        <div className="grid grid-cols-3 gap-5">
          {finder.map((data) => {
            return (
              <Link href={"/blog/" + data.id}>
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
              </Link>
            );
          })}
        </div>
        <div className="text-center">
          <button
            className="border text-[#696A75] py-3 px-5 rounded-xl "
            onClick={() => handleLoadmore()}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};
export default BlogData;
