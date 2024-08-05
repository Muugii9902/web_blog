const allPostCard = ({ image, type, text, date }) => {
  return (
    <>
      <div>
        <div>
          <img
            className="h-[240px] object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div>
          <button className="text-#4B6BFB0D">{type}</button>
          <h3>{text}</h3>
          <p>{date}</p>
        </div>
      </div>
    </>
  );
};
export default allPostCard;
