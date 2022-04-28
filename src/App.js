import 'antd/dist/antd.less'; 
import './App.css';
import './styles/Messages.css'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Filmografia from './components/Filmografia';

function App() {
  return (
    <div className="App-content">
      <h1>Bienvenido a tu buscador</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filmografia" element={<Filmografia/>}/>
      </Routes>
    </div>
  );
}

export default App;
