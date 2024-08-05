const TrendingCard = ({ image, type, text }) => {
  return (
    <>
      <div className="p-0 flex">
        <div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="rounded-xl h-[320px]  object-cover flex flex-col items-end"
          >
            <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
              {type}
            </button>
            <p className="text-white text-lg font-semibold">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingCard;
