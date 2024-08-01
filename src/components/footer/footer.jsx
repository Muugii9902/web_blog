import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Menu from "../header/menu";

const Footer = () => {
  return (
    <main>
      <section className="w-[1920px] h-[425px] flex flex-col items-center pt-16">
        <div className="w-[1215px] h-[236px] flex ">
          <div className="w-[289px]">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="font-bold">
              Email :<span> info@jstemplate.ne</span>{" "}
            </p>
            <p className="font-bold">
              Phone :<span> 880 123 456 789</span>{" "}
            </p>
          </div>
          <div className="w-[521px] flex justify-center ">
            <Menu className=" flex-row" />
          </div>
          <div className=" flex gap-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex justify-between w-[1215px]">
          <img
            className="w-[231px] h-[54px]"
            src="./images/footer.png"
            alt=""
          />
          <div className="flex gap-3">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Footer;
