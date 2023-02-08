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

  if (isLoading)
    return <Loading />
  return <main>
    <section>
      <Tours tours={tours} />
    </section>
  </main>
}

export default App
