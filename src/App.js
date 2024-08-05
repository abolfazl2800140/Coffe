import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import PageRoute from './route';
function App() {
  return (
    <BrowserRouter>
        <PageRoute />
    </BrowserRouter>
  );
}

export default App;
