
import Header from './components/header';
import Aside from './components/aside';
import Container from './components/container';
import Subcontainer from './components/subcontainer';
import Advertisement from './components/advertisement';
import Wrapper from './components/wrapper';
import './App.css';




function App() {
  return (
    <div className="App">
    
    <Wrapper />
    <Header />
    <Aside />
    <Container />
    <Subcontainer />
    <Subcontainer />
    <Subcontainer />
    <Advertisement/>
    </div>
  );
}

export default App;
