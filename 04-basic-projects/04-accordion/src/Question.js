import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [show, setShow] = useState(false)
  return <li className="question">
    <header>
      <h4>{title}</h4>
      {show ? 
        <button className="btn" onClick={() => setShow(false)}>
          <AiOutlineMinus/>
        </button>:
        <button className="btn" onClick={() => setShow(true)}>
          <AiOutlinePlus/>
        </button>
      }
    </header>
    {show ? <p>{info}</p> : null}
  </li>;
};

export default Question;
