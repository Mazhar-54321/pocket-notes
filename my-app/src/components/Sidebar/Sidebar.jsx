import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import ListItem from "./ListItem";
import Badge from "./Badge";
import { NotesContext } from "../../hoc/NotesProvider";
import NotesPopup from "./NotesPopup";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const {groups,selectedGroup,modifySelectedGroup } = useContext(NotesContext);
  
  return (
    <aside className="sidebar-container">
      <h2>Pocket Notes</h2>
      <div className="list-container">
        {groups?.map((menu, index) => (
          <ListItem
            clickHandler={() => {
              modifySelectedGroup(menu.name);
            }}
            bgColor={
              menu.name === selectedGroup ? "rgba(47, 47, 47, 0.17)" : "white"
            }
            color={menu.color}
            initials={menu.initials}
            heading={menu.name}
            key={index}
          />
        ))}
      </div>

      <div
        onClick={() => {
          setShowNotesPopup(true);
        }}
        className="sticky-button"
      >
        <Badge color={"#16008B"} initials={"\u271A"} />
      </div>
      {showNotesPopup && <NotesPopup onOutsideClick={()=>{setShowNotesPopup(false)}} />}
    </aside>
  );
};

export default Sidebar;
