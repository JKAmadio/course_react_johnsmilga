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
    <Menu items={listinha} chooseCategory={chooseCategory} />
    {showList.map(item => {
      return <div key={item.id}>{item.title}</div>
    })}
  </main>
}

export default App;
