import LabelTag from "../label-tag";
import TrendingCard from "./trendingcard";

const trendcard = [
  {
    image: "./image/trend1.png",
    type: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: <img />,
    type: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: <img src="/images/trend1.png" />,
    type: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: <img src="/images/trend1.png" />,
    type: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
const Trending = () => {
  return (
    <>
      <div className="w-3/5 m-auto">
        <LabelTag />
        <div className="grid-cols-4 gap-5 ">
          {trendcard.map((data) => (
            <TrendingCard
              image={data.image}
              type={data.type}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Trending;
