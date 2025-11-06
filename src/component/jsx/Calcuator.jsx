import style from "../css/Calculator.module.css";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { Screen } from "./Screen";
import { useTheme } from "../../context/Theme";
import { Mode } from "./Mode";

export const Calculator = () => {
  const [value, setValue] = useState("");
  const { theme, toggletheme } = useTheme();

  console.log(theme);
  //   toggletheme();
  console.log(theme);

  //   console.log(theme, toggletheme);

  return (
    <div className={style.calculatorcontainer}>
      <Mode />
      <Screen value={value} />
      <Buttons setValue={setValue} />
    </div>
  );
};
