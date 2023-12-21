import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
//props makes compoenents reusable
//devui powered by tailwindcss
//readymade css components
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Card1" btntext="Card1"></Card>
      <Card username="Card2" btntext="Card2"></Card>
    </>
  )
}

export default App
