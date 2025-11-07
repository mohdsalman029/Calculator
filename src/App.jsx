import "./App.css";
import { Calculator } from "./component/jsx/Calcuator";
import { ThemeProvider } from "./context/Theme";
import style from "./component/css/App.module.css";

function App() {
  return (
    <div className={style.appContainer}>
      <ThemeProvider>
        <Calculator />
      </ThemeProvider>
    </div>
  );
}

export default App;
