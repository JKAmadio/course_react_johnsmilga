import React from 'react';
import SectionTitle from './components/SectionTitle';
import { tours } from './data';

function Tours() {
  return (
    <section className="section" id="tours">
      <SectionTitle firstWord="featured" secondWord="tours" />

      <div className="section-center featured-center">
        {tours.map((item) => {
          const { id, img, date, title, text, country, interval, price } = item;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{interval} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
