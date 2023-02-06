import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }, [isLoading]);

  if (isLoading) return <h2>Loading...</h2>;

  return <h2>Multiple returns basics</h2>;
};
export default MultipleReturnsBasics;
