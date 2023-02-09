import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter(item => item.id !== id);
    setTours(newTours);
  }

  if (isLoading)
    return <Loading />
  if (tours.length === 0)
    return <main>
      <div className="title">
        <h2>No tours left</h2>
          <button className="btn" onClick={() => fetchData()}>Refresh</button>
      </div>
    </main>
  return <main>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline" />  
    </div>
    <Tours tours={tours} removeTour={(id) => removeTour(id)}/>
  </main>
}

export default App
