import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const NewsCard = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const truncateText = (text, limit) =>
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

  const description = isExpanded
    ? article.description
    : truncateText(article.description, 100);

  return (
    <div
      className={` hover:scale-105 transition-all duration-300 max-w-sm w-full flex flex-col rounded overflow-hidden shadow-lg ${
        isExpanded ? "min-h-[30em]" : "h-[30em]"
      }`}
    >
      {article.urlToImage && (
        <img
          className="w-full h-48 object-cover"
          src={article.urlToImage}
          alt={article.title}
        />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="font-bold text-xl mb-2">{article.title}</h2>
        <p className="text-gray-700 text-base mb-4">
          {description}
          {article.description && article.description.length > 100 && (
            <button
              onClick={toggleReadMore}
              className="text-indigo-500 hover:underline ml-2"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
        <div className="mt-auto flex items-center gap-2">
          <a
            href={article.url}
            target="_self"
            rel="noopener noreferrer"
            className="text-black hover:underline font-bold"
          >
            Visit
          </a>
          <a
            href={article.url}
            target="self"
            rel="noopener noreferrer"
            className="text-black hover:underline font-bold"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
