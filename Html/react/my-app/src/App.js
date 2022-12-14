
import Header from './components/header';
import Aside from './components/aside';
import Container from './components/container';
import Wrapper from './components/wrapper';
import Slider from './components/slider';
import './App.css';

function App() {
  return (
    <div className="App">

      <Header nombre="Rick" apellido="Roll" />
      <Slider />
      <Aside />
      <Container categoria="tremenda rola"/>

    </div>
  );
}

export default App;
