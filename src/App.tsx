import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log(userAgent, "Useragent")

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = 'https://apps.apple.com/mx/app/soma/id6466131820?l=en-GB';
      console.log("Apple");
    } 
    // Detectar dispositivo Android
    else if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.somaplus.app&hl=es_NI';
      console.log("Android");
    }
  }, []);


  return (
    <div className=''>
      <a href="http://" target="_blank" rel="noopener noreferrer">Soma+</a>
    </div>
  )
}

export default App
