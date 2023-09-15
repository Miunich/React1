import logo from './logo.svg';
import './App.css';
import imagen from "./Pableñe.jpg";
import './MiCss.css';

function App() {
  // let nombre=["Jab","Pepito","Guau"] //arreglo
  let nombre={name:"jab",edad:18}
  // let caja="<div>Nombre</div>"
  let caja=<div>Nombre</div>
  let nombres=["Pableñe","Pablo","Pablito"];
  return (
    <div className="fondo">
      {/* <h1>{nombre[1]}</h1>//arreglo */}
      <h1>{nombre.edad}</h1>
      {/* <input type="text"/> */}
      <br></br>
      <img src={imagen} className="im"/>
      {/* {alert("Hola Mundo")} */}
      <input value={nombre.name}></input>
      <div>{caja}</div>
      <div className="contenedor">
        <div className="caja">
          <img src={imagen} className="im"/>
          <div className="nombre">{nombres[0]}</div>

        </div>
        <div className="caja">
          <img src={imagen}className="im"/>
          <div className="nombre">{nombres[1]}</div>

        </div>
        <div className="caja">
          <img src={imagen}className="im"/>
          <div className="nombre">{nombres[2]}</div>

        </div>

      </div>
    </div>
  );
}

export default App;
