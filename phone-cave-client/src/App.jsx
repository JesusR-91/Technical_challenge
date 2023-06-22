//IMPORTS
import './App.css'

import { Route, Routes } from 'react-router-dom'
import AllPhones from './pages/AllPhones'
import Phone from './pages/Phone'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPhones/>}/>
        <Route path="/:phoneId" element={<Phone/>}/>
      </Routes>
    </div>
  )
}

export default App
