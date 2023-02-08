import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    }

    fetchData();
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter(item => item.id !== id);
    setTours(newTours);
  }

  if (isLoading)
    return <Loading />
  return <main>
    <Tours tours={tours} removeTour={(id) => removeTour(id)}/>
  </main>
}

export default App
