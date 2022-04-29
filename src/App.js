import "./App.css";
import { useState, useEffect } from "react";
import Values from "values.js";
import { rgbtohex } from "./utils";
import List from "./List";
function App() {
  const [formValue, setFormValue] = useState("");
  const [status, setStatus] = useState(false);
  const [colors, setColors] = useState([]);
  const handleChange = (e) => {
    setStatus(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const color = new Values(formValue).all(5);
      colorHeader(color);
      setColors(color);
    } catch (error) {
      console.log(error);
      setStatus(true);
    }
  };
  useEffect(() => {
    const color = new Values("#d2691e").all(5);
    colorHeader(color);
    setColors(color);
  }, []);
  return (
    <main className="app">
      <h1>
        <span data-id="19" className="name">
          C
        </span>
        <span data-id="20" className="name">
          o
        </span>
        <span data-id="21" className="name">
          l
        </span>
        <span data-id="22" className="name">
          o
        </span>
        <span data-id="23" className="name">
          r
        </span>
        <span data-id="null" className="name">
          {" "}
        </span>
        <span data-id="24" className="name">
          P
        </span>
        <span data-id="25" className="name">
          a
        </span>
        <span data-id="26" className="name">
          l
        </span>
        <span data-id="27" className="name">
          l
        </span>
        <span data-id="28" className="name">
          e
        </span>
        <span data-id="29" className="name">
          t
        </span>
        <span data-id="30" className="name">
          e
        </span>
      </h1>
      <form className={status ? "error" : ""} onSubmit={handleSubmit}>
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
//  <section className="loading_con">
//    <article className="loading">
//      <h2>Loading...</h2>
//      <div>
//        <span></span>
//        <span></span>
//        <span></span>
//      </div>
//    </article>
//  </section>;
export default App;
