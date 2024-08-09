import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Maincontent = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const getArticleData = async () => {
    const res = await fetch("https://dev.to/api/articles?page=1&per_page=9");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);

  // console.log("article", articles[index].cover_image);
  const handlePrev = () => {
    if (index <= 0) {
      setIndex(0);
      console.log(index);
    } else {
      setIndex(index - 1);
    }
  };
  console.log("index", index);
  return (
    <>
      <div>
        <div
          className="container m-auto h-[651px] rounded-xl bg-cover bg-center p-3 flex items-end"
          style={{ backgroundImage: `url(${articles[index]?.social_image})` }}
        >
          <div className="h-[50%] w-[50%] bg-white rounded-xl p-10 border">
            <span className="text-white text-[14px] bg-[#4B6BFB] py-1 px-3 rounded-md">
              {articles[index]?.user.username}
            </span>
            <p className="text-[38px] font-bold">{articles[index]?.title}</p>
            <p className="text-[#97989F]">{articles[index]?.published_at}</p>
          </div>
        </div>
        <div className="flex gap-2 container m-auto justify-end mt-3">
          <button className="border border-black p-4 rounded">
            <GrPrevious onClick={handlePrev} />
          </button>
          <button className="border border-black p-4 rounded">
            <GrNext
              onClick={() => {
                setIndex(index + 1);
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Maincontent;
