import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log(userAgent, "Useragent")

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = 'https://apps.apple.com/app/id123456789';
      console.log("Apple");
    } 
    // Detectar dispositivo Android
    else if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.tuapp.ejemplo';
      console.log("Android");
    }
  }, []);


  return (
    <div className=''>
      <a href="http://" target="_blank" rel="noopener noreferrer">Apple</a>
    </div>
  )
}

export default App
