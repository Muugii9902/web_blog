import BlogData from "../allpost/blogarr";
import Maincontent from "./maincontent";
import Trending from "./trending";

const Content = () => {
  return (
    <>
      <Maincontent />
      <Trending />
      <BlogData />
    </>
  );
};
export default Content;
