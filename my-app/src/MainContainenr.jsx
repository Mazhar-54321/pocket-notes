import React from 'react'
import NotesProvider from './hoc/NotesProvider'
import App from './App'

const MainContainenr = () => {
  return (
    <NotesProvider>
        <App />
    </NotesProvider>
  )
}

export default MainContainenr