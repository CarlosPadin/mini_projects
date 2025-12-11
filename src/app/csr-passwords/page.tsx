"use client";
import { useState, useEffect } from "react";
import Copy from "../components/icons/Copy";
import SliderBar from "../components/passwords/SliderBar";
import SwitchInput from "../components/passwords/SwitchInput";
import Close from "../components/icons/Close";

const PasswordsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [longPassword, setLongPassword] = useState(10);
  const [showMessage, setShowMessage] = useState(false);

  // Switches
  const [mayusculas, setMayusculas] = useState(true);
  const [minusculas, setMinusculas] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [simbolos, setSimbolos] = useState(true);

  useEffect(() => {
    generatePassword();
  }, [
    longPassword,
    mayusculas,
    minusculas,
    numeros,
    simbolos,
  ]);

  const copyPassword = () => {
    navigator.clipboard.writeText(inputValue);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const generatePassword = () => {
    let characters = "";

    if (mayusculas) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (minusculas) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numeros) {
      characters += "0123456789";
    }
    if (simbolos) {
      characters += "!@#$%^&*()_";
    }

    let password = "";
    for (let i = 0; i < longPassword; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      );
      password += characters[randomIndex];
    }
    setInputValue(password);
  };

  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
      <div className="border border-gray-500 p-5 rounded bg-white">
        <h2>Password Generator</h2>
        <hr />
        <div className="flex">
          <input
            type="text"
            placeholder="New password"
            className="rounded p-2 my-2 border"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={copyPassword}
            className="w-20 flex text-center justify-center items-center"
          >
            <Copy />
          </button>
        </div>
        <SliderBar
          value={longPassword}
          changeVlaue={setLongPassword}
        />
        <div className="flex justify-between pb-3">
          <SwitchInput
            value={mayusculas}
            onChange={setMayusculas}
            title="Mayúsculas"
          />
          <SwitchInput
            value={minusculas}
            onChange={setMinusculas}
            title="Minúsculas"
          />
        </div>
        <div className="flex justify-between pb-3">
          <SwitchInput
            value={numeros}
            onChange={setNumeros}
            title="Números"
          />
          <SwitchInput
            value={simbolos}
            onChange={setSimbolos}
            title="Símbolos"
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={generatePassword}
        >
          Generate
        </button>
      </div>
      <div className="absolute bottom-5 right-5">
        {showMessage && (
          <p className="bg-green-700 text-white p-2 rounded w-full text-center mt-2 gap-5 text-sm flex justify-between">
            <span>Contraseña copiada </span>
            <span onClick={() => setShowMessage(false)}>
              <Close />
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordsPage;
