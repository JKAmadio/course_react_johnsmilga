import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
