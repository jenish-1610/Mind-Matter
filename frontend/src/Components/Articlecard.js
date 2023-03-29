import React from "react";
import "../Style/articlecard.css";

const Articlecard = (props) => {
  const article = props.article;
  console.log(props.article.urlToImage);
  return (

    <>
      <main>
        <div className='article-card'>
          {/* <h4 >{article.title}</h4> */}

          <p className='article-card-description'>{article.title}</p>
          {/* { article.content}   */}
        </div>
      </main>
    </>
  );
};

export default Articlecard;
