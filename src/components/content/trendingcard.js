

const trendcard=[
    {
    bg:<img src="./images/trend1.png"  />,
    button:"button",
    text:"The Impact of Technology on the Workplace: How Technology is Changing"

   },
   {
       bg:<img/>,
       button:"button",
       text:"The Impact of Technology on the Workplace: How Technology is Changing"
   },
   {
    bg:<img src="/images/trend1.png"  />,
    button:"button",
    text:"The Impact of Technology on the Workplace: How Technology is Changing"

   },
   {
    bg:<img src="/images/trend1.png"  />,
    button:"button",
    text:"The Impact of Technology on the Workplace: How Technology is Changing"

   },
   {
    bg:<img src="/images/trend1.png"  />,
    button:"button",
    text:"The Impact of Technology on the Workplace: How Technology is Changing"

   },

]
const TrendingCard =()=>{
    return (
        <div>
            {trendcard.map((card)=>(
                <div key={card.bg} className="bg-[url('/images/trend1.png)]"> 

            )}
            
        </div>
    )

}