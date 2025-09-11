import { useContext, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Notes from "./components/Notes/Notes";
import NotesProvider, { NotesContext } from "./hoc/NotesProvider";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [tab, setTab] = useState(0);
  const { groups, selectedGroup, setGroups } = useContext(NotesContext);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
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
    setTab(selectedGroup?.length);
  }, [selectedGroup]);
  return <main className="main-container">{width <= 600 ? (
      tab ? (
        <Notes />
      ) : (
        <Sidebar />
      )
    ) : (
      <>
      
        <Sidebar />
        <Notes />
      </>
    )}</main>;
}

export default App;
