// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Container from './components/Container'
import Toast from './components/Toast'
import {useState} from 'react';

function App() {
  const [toast, setToast] = useState(null);
  const showToast = (msg,typ)=>{
    setToast({
      message: msg,
      type: typ
    });
    setTimeout(()=>{
      setToast(null);
    },3000)
  }
  return (
    <>
      <Navbar/>
      <Toast toast={toast}/>
      <Container showToast={showToast}/>
    </>
  );
}

export default App;