import { useEffect } from "react";
import style from "../css/Buttons.module.css";
export const Buttons = ({ setValue }) => {
  const buttons = [
    ["C", "B", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (/[0-9+\-\/*%=.]/.test(key)) appendValue(key);
    if (key === "Backspace") appendValue("B");

    if (key === "Enter") appendValue("=");
    if (key === "Delete") appendValue("C");
  };

  const handleLabelClick = (label) => {
    appendValue(label);
  };

  const appendValue = (key) => {
    setValue((screenValue) => {
      if (key === "=") {
        if (screenValue === "") {
          return screenValue;
        }
        let expression = screenValue;
        const lastChar = expression.slice(-1);
        if (/[+\-*\/%.]/.test(lastChar)) {
          expression = screenValue.slice(0, -1);
        }

        return `${eval(expression)}`;
      } else if (key === "B") {
        return screenValue.slice(0, -1);
      } else if (key === "C") {
        return "";
      } else {
        if (screenValue === "" && /[\/\-*+=%.]/.test(key)) {
          return screenValue;
        }

        const lastChar = screenValue.slice(-1);
        if (/[+\-\/*%.]/.test(lastChar) && /[+\-\/*%.]/.test(key)) {
          return screenValue;
        }

        const parceint = parseInt(screenValue);

        if (parceint === 0 && (key === "0" || key === "00")) {
          return "0";
        }

        return screenValue + key;
      }
    });
  };
  return (
    <div className={style.buttonsContainer}>
      {buttons.map((row, rowIndex) => (
        <div className={style.rowButtons} key={rowIndex}>
          {row.map((label, index) => (
            <div
              className={style.eachButtons}
              onClick={() => handleLabelClick(label)}
              key={index}
            >
              {label}
              {/* {label === "B" ? "B" : label === "C" ? label : label} */}
              {/* {label === "B" && "BB"}
              {label === "C" && "CC"}
              {label !== "C" && label !== "B" && label} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
