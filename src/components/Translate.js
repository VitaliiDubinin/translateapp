import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Translate() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(() => value);
  };

  const handleTransChange = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8005/langtransapp/", inputs).then((res) => console.log(res));
    // navigate("/");
  };
  // console.log(value);
  // setInputs(() => value);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: inputs + "\n",
        source: "en",
        target: "es",
        format: "text",
      }),
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(inputs);
      console.log(response.data);
      // navigate("/");
    });
  };

  return (
    <div>
      <h1>Translate</h1>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label htmlFor="word">originate word:</label>
        <input type="text" name="word" onChange={handleChange} />
        <label htmlFor="traslation">translation:</label>
        <input type="text" name="translation" onChange={handleTransChange} value={inputs} />

        <br />

        <button onClick={handleSubmit}>translate</button>
        <button onClick={handleTransChange}>send to base</button>
      </form>
    </div>
  );
}

export default Translate;
