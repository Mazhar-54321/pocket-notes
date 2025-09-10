import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Notes from './components/Notes/Notes'

function App() {

  return (
    <main className='main-container'>
     <Sidebar />
     <Notes />
    </main>
  )
}

export default App
