import './App.css';
import Homepage from './component/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/home" element = {<Homepage />} />
        <Route path="/products" element = {<Homepage />} />
        <Route path="/login" element = {<Homepage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;

// change route path for products to where your product file is