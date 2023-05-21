import { useState } from "react";

export function Rating() {
  const [rateing, setRating] = useState(0);

  const plus = () => {
    setRating(rateing + 1);
  };
  const minus = () => {
    setRating(rateing - 1);
  };
  return (
    <>
      <h3>Please rate the article</h3>
      <p>Rating: {rateing} </p>
      <button onClick={plus}> +1👍</button>
      <button onClick={minus}>-1👎</button>
    </>
  );
}
