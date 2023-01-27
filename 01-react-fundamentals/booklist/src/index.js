import React from 'react';
import ReactDom from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41AkIg2fDcL._SX339_BO1,204,203,200_.jpg"
      alt="book-cover"
    />
  );
};

const Title = () => {
  return <h2>The Creative Act: A Way of Being</h2>;
};

const Author = () => {
  return <h4>Rick Rubin</h4>;
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
