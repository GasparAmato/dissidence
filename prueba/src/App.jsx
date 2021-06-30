
import './App.css';
import Navbar from "./componentes/NavBar/NavBar"

function App() {
  const darBienvenida = () => alert("bienvenida a nuestra tienda")

  return (
    <>
    <div className="App">
      <Navbar
      nombreDeLaTienda="Zuko" 
      subtitulo="store"
      darBienvenida={darBienvenida}
      />

<h1>hola mundo </h1>
<h2>holaa</h2>

    </div>
    </>
  );
}

export default App;
