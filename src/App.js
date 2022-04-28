import "./App.css";
import { useState, useEffect } from "react";
import Values from "values.js";
import List from "./List";
function App() {
  const [formValue, setFormValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue("");
  };
  const [status, setStatus] = useState({
    loading: false,
    found: false,
    error: false,
  });
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
  useEffect(() => {
    console.log("I was called");
  }, []);
  return (
    <main className="app">
      <h1>
        <span className="name">C</span>
        <span className="name">o</span>
        <span className="name">l</span>
        <span className="name">o</span>
        <span className="name">r</span>
        <span className="name"> </span>
        <span className="name">P</span>
        <span className="name">a</span>
        <span className="name">l</span>
        <span className="name">l</span>
        <span className="name">e</span>
        <span className="name">t</span>
        <span className="name">e</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="#d2691e"
          type="text"
          name="color"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <section className="container">
        {array.map((color, index) => (
          <List key={index} />
        ))}
      </section>
      <div>
        {status.loading && (
          <section className="loading">
            <article className="loading">
              <h2>Loading...</h2>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </article>
          </section>
        )}
        {status.found && <section className="container"></section>}
      </div>
    </main>
  );
}

export default App;
