import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="./images/book-1.jpg" alt="book-cover" />;
};

const Title = () => {
  return <h2>The Creative Act: A Way of Being</h2>;
};

const Author = () => {
  return <h4>Rick Rubin</h4>;
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
