import React from "react";
import "./TextInput.css";

function TextInput({ text, value, setValue, type }) {
  const [inputFocus, setInputFocus] = React.useState(false);
  function isValueSet() {
    setInputFocus(false);
  }
  return (
    <div
      className={
        inputFocus ? "textInputRow textInputRowActive" : "textInputRow"
      }
    >
      <label
        for={text}
        className={
          value.length || inputFocus > 0
            ? "textInputLabel textInputLabelActive"
            : "textInputLabel"
        }
      >
        {text}
      </label>
      <input
        type={type ? type : "text"}
        className="textInput"
        id={text}
        name={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setInputFocus(true);
        }}
        onBlur={() => isValueSet()}
        required
      />
    </div>
  );
}

export default TextInput;
