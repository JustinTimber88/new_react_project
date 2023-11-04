import React, { useEffect, useState } from "react";
import './new.css'; // Import CSS file

const News = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [errorMess, setErrorMess] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );

  const handleFetchData = async () => {
    setErrorMess("");

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setHits(data.hits || []);
    } catch (err) {
      setErrorMess(`${err}`);
    } finally {
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [url]);
  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          className=""
          placeholder="typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="button"
        >
          Fetching
        </button>
      </div>
      <div className="results-container">
        {hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="result">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default News;
