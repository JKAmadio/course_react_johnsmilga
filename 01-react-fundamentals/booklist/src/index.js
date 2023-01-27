import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Rick Rubin',
  title: 'The Creative Act: A Way of Being',
  img: './images/book-1.jpg',
};

const secondBook = {
  author: 'Robert Greene',
  title: 'Nova o 48 Leis do Poder',
  img: './images/book-2.jpg',
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        title={firstBook['title']}
        image={firstBook['img']}
        author={firstBook['author']}
      >
        <p>
          Deserunt quo qui maiores. Officiis voluptatibus quam provident
          consequatur eaque.
        </p>
        <button>click me</button>
      </Book>
      <Book
        title={secondBook['title']}
        image={secondBook['img']}
        author={secondBook['author']}
      />
    </section>
  );
};

const Book = (props) => {
  // the "children" props is a default prop from React
  // it access everything between the component tags
  const { title, image, author, children } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

/* 
destructuring inside the function parameters

const Book = ({ title, image, author, children }) => {
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
