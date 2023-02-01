const ErrorExample = () => {
  let counter = 0;

  const increaseCounter = () => {
    counter += 1;
    console.log(counter);
    return counter;
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increaseCounter} className="btn">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
