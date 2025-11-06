import { Darkmode, Light } from "../../assets/Icons";
import { useTheme } from "../../context/Theme";
import style from "../css/Mode.module.css";

export const Mode = () => {
  const { theme, toggletheme } = useTheme();
  return (
    <div className={style.modecontainer}>
      <div
        onClick={() => {
          toggletheme();
        }}
        className={style.toggle}
      >
        {theme === "light" ? Light : Darkmode}
      </div>
    </div>
  );
};
