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

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((item) => item['id'] === id);
    console.log(book);
  };
  return (
    <section className="bookList">
      {books.map((book) => {
        // we use the spread operator to pass all book's infos as props
        return <Book {...book} getBook={getBook} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { title, img, author, id, getBook } = props;

  /* const getSingleBook = () => {
    getBook(id);
  }; */
  return (
    <article className="book">
      <img src={img} alt={title} />
      {/*
        we can use a auxiliar function to evolke the getBook at the right moment
        <button onClick={getSingleBook}>click me</button>
      */}

      {/* or call it as an anonymous function */}
      <button onClick={() => getBook(id)}>click me</button>

      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
