
import Header from './components/header';
import './App.css';
import Ejemplo from './components/ejemplo';
import ContadorIncremental from './components/contadorIncremental';
import Ejemplo2 from './components/ejemplo2';
import AutoComponent from './components/auto';

function App() {
  return (
    <div className="App">

      <Header nombre="Rick" apellido="Roll" />
      <AutoComponent />

    </div>
  );
}

export default App;
