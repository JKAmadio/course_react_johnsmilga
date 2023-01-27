import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Rick Rubin',
    title: 'The Creative Act: A Way of Being',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Robert Greene',
    title: 'Nova o 48 Leis do Poder',
    img: './images/book-2.jpg',
    id: 2,
  },
];

const Book = (props) => {
  const { title, image, author } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="bookList">
      {/* 
        to create multiple Book components
        we iterate throw the books array and return for each
        a Book component with the book infos
       */}
      {books.map((book) => {
        // we destructure the infos from the book
        const { title, author, img, id } = book;
        return <Book key={id} title={title} author={author} image={img} />;
      })}
    </section>
  );
};

/* 
destructuring inside the function parameters
const Book = ({ title, image, author }) => {
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
 */

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
