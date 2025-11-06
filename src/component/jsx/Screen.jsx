import style from "../css/Screen.module.css";

export const Screen = ({ value }) => {
  return <div className={style.screen}>{value}</div>;
};
