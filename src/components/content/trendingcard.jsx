const TrendingCard = ({ image, type, text }) => {
  return (
    <>
      <div className="m-auto flex py-5">
        <div>
          <div
            className="rounded-xl h-[320px] w-[290px] bg-cover bg-blend-darken  bg-[rgba(0,0,0,0.5)]"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className=" ">
              <button className="py-1 px-2.5 rounded-lg bg-[#4B6BFB] text-white mb-4 font-medium">
                {type}
              </button>
              <p className="text-white text-lg font-semibold">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingCard;
