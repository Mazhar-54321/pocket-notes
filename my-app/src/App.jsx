import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Notes from "./components/Notes/Notes";
import NotesProvider from "./hoc/NotesProvider";

function App() {
  return (
    <NotesProvider>
      <main className="main-container">
        <Sidebar />
        <Notes />
      </main>
    </NotesProvider>
  );
}

export default App;
