import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("sdsdsd", query.id);
  const [ArticleDetail, setArticleDetail] = useState(null);
  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };
  useEffect(() => {
    getArticleById(query.id);
  }, []);
  return (
    <div className="p-10 w-[800px] m-auto">
      <div className="flex justify-center">
        <img
          className="w-10 h-10 rounded-full"
          src={ArticleDetail?.user.profile_image}
          alt=""
        />
        <div
          className="blog-details"
          dangerouslySetInnerHTML={{ __html: ArticleDetail?.body_html }}
        ></div>
      </div>
    </div>
  );
};
export default ArticleDetail;
