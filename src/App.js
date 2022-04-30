// import 'antd/dist/antd.less';
import 'antd/dist/antd.css'; 
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Filmografia from './components/Filmografia';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filmografia" element={
      <ProtectedRoute>
        <Filmografia/>
    </ProtectedRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
