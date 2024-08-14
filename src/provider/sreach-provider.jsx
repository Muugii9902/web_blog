import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const SearchContext = createContext(null);

const SreachProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getArticleData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dev.to/api/articles?page=${page}&per_page=9`
      );
      const data = await res.json();
      setArticles((prevArticles) => {
        return [...prevArticles, ...data];
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Алдаа гарлаа. Та дахин оролдоно уу");
    }
  };
  const handleLoadmore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    getArticleData();
  }, [page]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        articles,
        isLoading,
        handleLoadmore,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SreachProvider;
