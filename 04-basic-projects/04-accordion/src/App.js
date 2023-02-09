import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <section className="container">
      <h3>Questions And Answers About Login</h3>
      <ul>
        {data.map(item => {
          return <SingleQuestion key={item.id} {...item}/>
        })}
      </ul>
    </section>
  </main>
}

export default App;
