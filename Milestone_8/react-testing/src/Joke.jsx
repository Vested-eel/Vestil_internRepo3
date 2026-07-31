import { useEffect, useState } from "react";

function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);

  return <p>{joke || "Loading..."}</p>;
}

export default Joke;
