import React, { useState, useEffect, useRef } from "react";
import { rgbtohex } from "./utils";

const List = ({ color, index }) => {
  const timeOutref = useRef(null);
  const [alert, setAlert] = useState(false);
  const { rgb, weight } = color;
  const [r, g, b] = rgb;
  const hex = rgbtohex(r, g, b);

  const handleCopy = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    clearTimeout(timeOutref.current);

    timeOutref.current = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timeOutref.current);
    };
  }, [alert]);

  return (
    <div
      onClick={handleCopy}
      style={{ backgroundColor: hex }}
      className="color_box"
    >
      <div className={`box_content ${index > 100 ? "white" : "black"}`}>
        <p>{weight}%</p>
        <p>{hex}</p>
        {alert && <p className="alert">COPIED TO CLIPBOARD</p>}
      </div>
    </div>
  );
};
export default List;
