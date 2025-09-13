import { useContext, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesContainer from "./components/Notes/NotesContainer";
import { NotesContext } from "./hoc/NotesProvider";

function App() {
  const [state, setState] = useState({ width: window.innerWidth, tab: 0 });
  const { selectedGroup, setGroups } = useContext(NotesContext);
  useEffect(() => {
    const handleResize = () =>
      setState((prev) => ({ ...prev, width: window.innerWidth }));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  useEffect(() => {
    const groupNotes = localStorage.getItem("group-notes");
    if (groupNotes) {
      setGroups(JSON.parse(groupNotes));
    }
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, tab: selectedGroup?.length }));
  }, [selectedGroup]);
  return (
    <main className="main-container">
      {state?.width <= 600 ? (
        state?.tab ? (
          <NotesContainer />
        ) : (
          <Sidebar />
        )
      ) : (
        <>
          <Sidebar />
          <NotesContainer />
        </>
      )}
    </main>
  );
}

export default App;
