import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";

import Content from "@/components/content/content";
import AllBlogpost from "@/pages/allblogpost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=1&perpage=9"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);
  console.log("article", articles);

  return (
    <main>
      <Content />
    </main>
  );
}
