import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Content = () => {
  return (
    <section className="m-auto">
      <div className="w-[1216px]h-[651px] flex justify-center  ">
        <div>
          <img
            className="w-[1216px] h-[600px]"
            src="./images/img1.png"
            alt=""
          />
          <div className="flex justify-end gap-2 pt-2">
            <button className="border w-[40px] h-[40px] ">
              <MdArrowBackIos className="size-6 flex items-center" />
            </button>
            <button className="  border w-[40px] h-[40px] ">
              <MdArrowForwardIos className=" size-6 flex justify-center" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Content;
