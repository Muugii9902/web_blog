const TrendingCard = ({ image, type, text }) => {
  return (
    <>
      <div className="p-0 relative">
        <div>
          <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
            {type}
          </button>
          <p className="text-white text-lg font-semibold">{text}</p>
        </div>
        <img
          className="rounded-xl h-[320px] object-cover brightness-[0.65] "
          src={image}
          alt="cover"
        />
      </div>
    </>
  );
};
export default TrendingCard;
