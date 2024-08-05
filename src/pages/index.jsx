import Image from "next/image";
import { Inter } from "next/font/google";

import Content from "@/components/content/content";
import AllBlogpost from "@/components/allblogpost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Content />
      <AllBlogpost />
    </main>
  );
}
