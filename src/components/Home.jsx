import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const Home = () => {
  
  const category = useSelector((state) => state.search.searchText); // Get search text from Redux state
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

 

  // Function to fetch articles
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=5fe2c105ba08430ebbfb28e2fa7a213e`
      );
      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Effect to fetch data when category or page changes
  useEffect(() => {
    fetchData();
  }, [category, page]);

  // Effect to reset page to 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [category]);

  // Render shimmer effect while loading
  if (loading) return <Shimmer />;

  // Render error message if fetch fails
  if (error) return <p className="flex">Error fetching data: {error.message}</p>;

  // Filter articles with image URLs
  const filteredArticles = articles.filter((article) => article.urlToImage);

  // Render articles
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      {filteredArticles.length !== 0 ? (
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Top News Headlines
        </h1>
      ) : (
        <div></div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {filteredArticles.length === 0 ? (
          <div className="font-bold text-lg sm:text-2xl lg:text-3xl text-center">
            Sorry! No articles found.
          </div>
        ) : (
          filteredArticles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </div>

      <div className="flex gap-5 mt-10 md:mt-20">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="border p-2 w-20 font-bold bg-slate-300 rounded-md hover:scale-95"
          >
            Back
          </button>
        )}
        {filteredArticles.length !== 0 && (
          <button
            onClick={() => setPage(page + 1)}
            className="border p-2 w-20 font-bold bg-slate-300 rounded-md hover:scale-95"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
