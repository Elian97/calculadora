import './App.css';
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png"

function App() {
  return (
    <div className="App">
     <div className="freecodecamp-logo-contenedor">
      <img src={freeCodeCampLogo} className="freecodecamp-logo" alt="logo de freecodecamp" />
     </div>
     <div className="contenedeor-calculadora">
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
     </div>
    </div>
  );
}

export default App;
