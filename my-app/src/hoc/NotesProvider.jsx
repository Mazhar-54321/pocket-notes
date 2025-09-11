import React, { createContext, useEffect, useState } from "react";
export const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const addGroup = (groupObj) => {
    if (
      !groups.filter(
        (el) => el.name.toLowerCase() === groupObj.name.toLowerCase()
      ).length
    ) {
      setGroups((prev) => [{ ...groupObj, notes: [] }, ...prev]);
      localStorage.setItem("group-notes", JSON.stringify([
        { ...groupObj, notes: [] },
        ...groups,
      ]));
    } else {
      alert("Group name already exists");
    }
  };
  const modifySelectedGroup = (groupName) => {
    setSelectedGroup(groupName);
  };

  const addNote = (groupKey, note) => {
    let groupsArray = [...groups];
    const date = new Date();
    const datePart = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const timePart = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    groupsArray = groupsArray.map((el) => {
      if (el.name === groupKey) {
        el.notes = [
          { note: note, date: datePart, time: timePart },
          ...el.notes,
        ];
      }
      return el;
    });
    setGroups(groupsArray);
    localStorage.setItem("group-notes", JSON.stringify(groupsArray));
  };
  return (
    <NotesContext.Provider
      value={{ groups, addGroup, selectedGroup, modifySelectedGroup, addNote,setGroups }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
