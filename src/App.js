import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  const [password, setPassword] = useState("");
  const [charLength, setCharLength] = useState(16);

  function genChar() {
    let pass = "";
    const value =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!+?-_";
    const charLen = value.length;
    for (let i = 0; i < charLength; i++) {
      pass += value.charAt(Math.floor(Math.random() * charLen));
    }
    setPassword(pass);
    console.log(pass);
  }

  const FormSubmit = (e) => {
    e.preventDefault();
    genChar();
  };

  return (
    <>
      <NavBar />
      <div className="main container d-flex flex-column justify-content-center align-items-center mt-2">
        <div className="d-flex justify-content-center flex-column">
          <h3>Password Generator</h3>
          <p>How many charactors do you need(recommended number is 16)</p>
          <div className="form-group w-25">
            <form onSubmit={FormSubmit}>
              <input
                className="form-control form-control-sm w-50"
                type="number"
                value={charLength}
                onChange={(e) => setCharLength(e.target.value)}
              />
              <button type="submit" className="btn btn-success btn-sm mt-2">
                Set Password
              </button>
            </form>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Your password is:</label>
          <input
            value={password}
            readOnly
            className="form-control form-control-sm"
          />
          <button
            className="btn btn-sm btn-primary mt-2"
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert(`${password} was copied to your clipboard.`);
            }}
          >
            Copy Password
          </button>
        </div>
        <div>
          <p className="text-muted mt-2 text-wrap">
            To get a fresh password just refresh your browser. It will change
            everytime with a brand new random password that is safe and secure.
          </p>
          <p className="text-muted text-wrap">
            The "Copy Password" button is not supported in IE8 and earlier.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
