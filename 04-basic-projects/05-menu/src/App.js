import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [showList, setShowList] = useState(items)
 
  let listinha = ['all']
  
  items.map(item => {
    if (!listinha.includes(item['category']))
      listinha.push(item['category'])
  })

  const chooseCategory = (category) => {
    if (category === 'all')
      setShowList(items)
    else {
      const newList = items.filter(item => item.category === category);
      setShowList(newList);
    }
  }

  return <main>
    {listinha.map((item, index) => {
      return <button key={index} onClick={() => chooseCategory(item)}>{item}</button>
    })}
    {showList.map(item => {
      return <div key={item.id}>{item.title}</div>
    })}
  </main>
}

export default App;
