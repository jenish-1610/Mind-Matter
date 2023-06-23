import axios from "axios";
import React, { useEffect, useState } from "react";
import Articlecard from "../Components/Articlecard";

import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import "../Style/articlepage.css";


const Article = () => {
  const [articles, setArticles] = useState();
  const [pageno, setPageno] = useState(1);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  useEffect(() => {
    const fetch_articles = async () => {
      const url = `https://newsapi.org/v2/everything?q=mental&from=2023-05-23&sortBy=publishedAt&pageSize=9&page=${pageno}&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setArticles(res.data.articles);
      // console.log(articles);
    };
    fetch_articles();
  }, []);

  const nextHandler = async() => {
    // console.log("next");
    setPageno(pageno + 1);
    if (pageno >= 30) {
      const url = `https://newsapi.org/v2/everything?q=mental&from=2023-05-23&sortBy=publishedAt&pageSize=9&page=1&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setArticles(res.data.articles);
      console.log(articles);
      window.scrollTo(0, 0);
      // setNext(false);
    }
    else { 
      const url = `https://newsapi.org/v2/everything?q=mental&from=2023-05-23&sortBy=publishedAt&pageSize=9&page=${pageno}&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setArticles(res.data.articles);
      // console.log(url)
      console.log(articles);
      window.scrollTo(0, 0);
    }  
    
  };
  
  const prevHandler = async () =>  {
    // console.log("previous");
    setPageno(pageno - 1);
    if (pageno <= 0) {
      const url = `https://newsapi.org/v2/everything?q=mental&from=2023-05-23&sortBy=publishedAt&pageSize=9&page=1&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setArticles(res.data.articles);
      console.log(articles);
      window.scrollTo(0, 0);
    }
    else { 
      const url = `https://newsapi.org/v2/everything?q=mental&from=2023-05-23&sortBy=publishedAt&pageSize=9&page=${pageno}&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(url);
      setArticles(res.data.articles);
      // console.log(url)
      console.log(articles);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>

      <nav className='navigation'>
        <Navbar />
      </nav>
      {/* <h2>Heyyy theree</h2> */}

      {articles ? (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 article-page'>
          {articles.map((article, id) => (
            <a href={article.url} target='_blank' key={id}>
              <Articlecard article={article} />
            </a>
          ))}
        </div>
      ) : (
        <Link to='../'>Home</Link>
      )}

      <div className='next-previous-button'>
        <div  className='prev-button' onClick={prevHandler}>&larr; Previous</div>
        <div  className='next-button' onClick={nextHandler}>Next &rarr;</div>
      </div>

      <footer>
        <Footer/>
      </footer>

    </>
  );
};

export default Article;
