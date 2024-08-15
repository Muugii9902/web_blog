import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Maincontent = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const getArticleData = async () => {
    const res = await fetch("https://dev.to/api/articles?page=1&per_page=5");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);

  // console.log("article", articles[index].cover_image);
  const handlePrev = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(4);
    }
  };
  console.log("index", index);
  return (
    <>
      <div className="">
        <div className="overflow-hidden flex rounded-xl container m-auto">
          {articles.map((art) => {
            return (
              <div
                className={`translate-x-[-${index}00%] transition-all ease-in-out duration-500`}
              >
                <div
                  className="container m-auto h-[651px] w-[1600px] rounded-xl bg-cover bg-center bg-blend-darken bg-[rgba(0,0,0,0.3)] p-3 flex items-end"
                  style={{ backgroundImage: `url(${art.social_image})` }}
                >
                  <div className="h-[50%] w-[50%] bg-white rounded-xl p-10 border">
                    <span className="text-white text-[14px] bg-[#4B6BFB] py-1 px-3 rounded-md">
                      {art.user.username}
                    </span>
                    <p className="text-[38px] font-bold">{art.title}</p>
                    <p className="text-[#97989F]">{art.published_at}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 container m-auto justify-end mt-3">
          <button
            onClick={handlePrev}
            className="border border-black p-4 rounded"
          >
            <GrPrevious />
          </button>
          <button
            onClick={() => {
              setIndex(index + 1);
              if (index >= 4) {
                setIndex(0);
              }
            }}
            className="border border-black p-4 rounded"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};
export default Maincontent;
