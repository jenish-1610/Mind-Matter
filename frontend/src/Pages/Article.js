import axios from "axios";
import React, { useEffect, useState } from "react";
import Articlecard from "../Components/Articlecard";

import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
import "../Style/article.css"


const Article = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetch_articles = async () => {
      const url = `https://newsapi.org/v2/everything?q=depression&from=2023-03-25&to=2023-03-25&sortBy=popularity&pageSize=10&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setArticles(res.data.articles);
      console.log(articles);
    };
    fetch_articles();
  }, []);

  return (
    <>
      

      <nav className="navigation"><NavBar /></nav>
      {/* <h2>Heyyy theree</h2> */}

      {articles ? (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 article-page'>
          {articles.map((article, id) => (
              <Link to='{article.url}' key={id}>
              <Articlecard article={article} />
            </Link>
          ))}
        </div>
      ) : (
        <Link to='/home'>Home</Link>
      )}
      </div>
      </main>
     

    </>
  );
};

export default Article;
