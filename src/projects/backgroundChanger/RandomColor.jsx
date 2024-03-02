import React, { useState, useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#557A01");

  useEffect(() => {
    typeOfColor === "rgb"
      ? handleCreateRandomRgbColor()
      : handleCreateRandomHexColor();
  }, [typeOfColor]);

  function randomColorGen(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hexOptions = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexOptions[randomColorGen(hexOptions.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorGen(256);
    const g = randomColorGen(256);
    const b = randomColorGen(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div className="bgColor-wrapper" style={{ background: color }}>
      <div className="btn-wrapper">
        <button
          onClick={() => setTypeOfColor("hex")}
          style={{
            background: typeOfColor === "hex" ? "rgb(46, 0, 34)" : "",
            color: typeOfColor === "hex" ? "#fff" : "",
          }}
        >
          Create HEX Color
        </button>

        <button
          onClick={() => setTypeOfColor("rgb")}
          style={{
            background: typeOfColor === "rgb" ? "rgb(46, 0, 34)" : null,
            color: typeOfColor === "rgb" ? "#fff" : "",
          }}
        >
          Create RGB Color
        </button>

        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="color">
        <h1>{typeOfColor === "hex" ? "HEX Color:" : "RGB Color:"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
