import React, { useState, useEffect } from "react";
import "./index.css";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [array, setArray] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("nombre", array);
  }, [array]);

  const saveData = () => {
    setArray([...array, inputText]);
  };

  return (
    <div className="input_container">
      <input
        className="input"
        placeholder="Ingresa tu nombre"
        onChange={handleInputChange}
      />
      <button className="button" onClick={() => saveData()}>
        Guardar
      </button>
      {array.map((objeto,index) => {
        return <p key={index} className="localstorage">{objeto}</p>;
      })}
    </div>
  );
};

export default Input;
