import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState<any>(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  //useRef hook
  const passwordRef: any = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div className="main-page">
      <h1 className="page-title">Password Generator</h1>
      <div className="input-div">
        <input
          type="text"
          className="password-input"
          placeholder="password"
          value={password}
          readOnly={true}
          ref={passwordRef}
        />
        <button className="cp-button"
        onClick={copyPassword}
        >copy</button>
      </div>
      <div className="options">
        <input
          type="range"
          min={8}
          max={16}
          value={length}
          className="range"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>length: {length}</label>
        <input
          type="checkbox"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label>Number</label>
        <input
          type="checkbox"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label>Characters</label>
      </div>
    </div>
  );
}

export default App;
