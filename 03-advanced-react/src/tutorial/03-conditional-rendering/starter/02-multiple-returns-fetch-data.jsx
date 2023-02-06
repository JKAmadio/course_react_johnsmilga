import { useEffect, useState } from 'react';
const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const newUser = await resp.json();

        // needed because of "fetch"
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        setUser(newUser);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error!!</h2>;

  const { sprites, name, id } = user;
  return (
    <div>
      <img src={sprites.front_shiny} alt="" />
      <h2>{name}</h2>
      <h2>id nº {id}</h2>
    </div>
  );
};
export default MultipleReturnsFetchData;
