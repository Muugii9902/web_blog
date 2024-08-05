import Image from "next/image";
import { Inter } from "next/font/google";
import allBlogPost from "@/components/allpost/blog";

import Content from "@/components/content/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Content />
      <allBlogPost />
    </main>
  );
}
