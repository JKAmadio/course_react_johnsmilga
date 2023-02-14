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
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"/>
      </div>
      <Menu items={listinha} chooseCategory={chooseCategory} />
      <Categories showList={showList}/>
    </section>
  </main>
}

export default App;
