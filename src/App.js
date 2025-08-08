import "./App.css";
import { useState, useEffect } from "react";
import Values from "values.js";
import { rgbtohex } from "./utils";
import List from "./List";

function App() {
  const [formValue, setFormValue] = useState("");
  const [err, setErr] = useState(false);
  const [colors, setColors] = useState([]);

  const handleChange = (e) => {
    setErr(false);
    setFormValue(e.target.value);
  };

  function colorHeader(color) {
    const names = document.querySelectorAll(".name");
    names.forEach((name) => {
      const id = name.dataset.id;
      const rgb = color[id]?.rgb;
      if (rgb) {
        const [r, g, b] = rgb;
        const hex = rgbtohex(r, g, b);
        name.style.color = hex;
      }
    });
  }

  function applyColors(value) {
    const color = new Values(value).all(1);
    const colHeader = new Values(value).all(5);
    colorHeader(colHeader);
    setColors(color);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      applyColors(formValue);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  useEffect(() => {
    applyColors("#d2691e");
  }, []);

  return (
    <main className="app">
      <h1>
        {["C", "o", "l", "o", "r", " ", "P", "a", "l", "l", "e", "t", "e"].map(
          (letter, index) => (
            <span
              key={index}
              data-id={letter === " " ? null : index + 19}
              className="name"
            >
              {letter}
            </span>
          )
        )}
      </h1>

      <form className={err ? "error" : ""} onSubmit={handleSubmit}>
        <input
          placeholder="#d2691e"
          type="text"
          name="color"
          value={formValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <section className="container">
        {colors.map((color, index) => (
          <List color={color} key={index} index={index} />
        ))}
      </section>
    </main>
  );
}

export default App;
