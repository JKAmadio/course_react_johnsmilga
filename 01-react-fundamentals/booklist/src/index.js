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
  return (
    <section className="bookList">
      <EventExamples />
      {books.map((book) => {
        // we use the spread operator to pass all book's infos as props
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { title, img, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const EventExamples = () => {
  // as it's a event handler we can access the 'event' object
  const handleOnChangeEvent = (e) => {
    console.log(`Change to ${e.target.value}`);
  };

  const handleOnClickEvent = (e) => {
    e.preventDefault();
    console.log('Change');
  };

  return (
    <section>
      <form>
        <h1>Typical Form</h1>
        <input type="text" name="example" onChange={handleOnChangeEvent} />
        <button onClick={handleOnClickEvent}>click me</button>
      </form>
    </section>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
