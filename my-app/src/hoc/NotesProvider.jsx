import React, { createContext, useState } from 'react'
export const NotesContext =createContext();
const NotesProvider = ({children}) => {
  const [notes,setNotes]= useState([
  { heading: "Dashboard", initials: "DB", color: "red" },
  { heading: "Profile", initials: "PR", color: "blue" },
  { heading: "Settings", initials: "ST", color: "green" },
  { heading: "Notifications", initials: "NT", color: "orange" },
  { heading: "Messages", initials: "MS", color: "purple" },
  { heading: "Analytics", initials: "AN", color: "#ff5733" },
  { heading: "Reports", initials: "RP", color: "rgb(0, 128, 255)" },
  { heading: "Logout", initials: "LO", color: "teal" },

  
]);
const addGroup = (groupName)=>{

}

  const addNote = (noteObj,groupKey)=>{
   setNotes(noteObj);
  }  
  return (
    <NotesContext.Provider value={{notes,addNote}}>
        {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider