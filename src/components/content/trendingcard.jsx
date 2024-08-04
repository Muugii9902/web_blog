const trendcard = [
  {
    bg: "/images/trend1.png",
    button: "button",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    bg: <img />,
    button: "button",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    bg: <img src="/images/trend1.png" />,
    button: "button",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    bg: <img src="/images/trend1.png" />,
    button: "button",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    bg: <img src="/images/trend1.png" />,
    button: "button",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
const TrendingCard = () => {
  return (
    <div className="flex">
      {trendcard.map((card, index) => (
        <div
          key={index}
          className="bg-cover bg-center w-[293px] h-[320px]"
          style={{ backgroundImage: `url(${card.bg})` }}
        >
          <button>{card.button}</button>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};
export default TrendingCard;
