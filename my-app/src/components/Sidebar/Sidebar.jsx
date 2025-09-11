import React, { useContext, useState } from "react";
import "./Sidebar.css";
import ListItem from "./ListItem";
import Badge from "./Badge";
import { NotesContext } from "../../hoc/NotesProvider";
import NotesPopup from "./NotesPopup";
const menuList = [
  { heading: "Dashboard", initials: "DB", color: "red" },
  { heading: "Profile", initials: "PR", color: "blue" },
  { heading: "Settings", initials: "ST", color: "green" },
  { heading: "Notifications", initials: "NT", color: "orange" },
  { heading: "Messages", initials: "MS", color: "purple" },
  { heading: "Analytics", initials: "AN", color: "#ff5733" },
  { heading: "Reports", initials: "RP", color: "rgb(0, 128, 255)" },
  { heading: "Logout", initials: "LO", color: "teal" },
];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const { notes, addNote } = useContext(NotesContext);
  return (
    <aside className="sidebar-container">
      <h2>Pocket Notes</h2>
      <div className="list-container">
        {notes?.map((menu, index) => (
          <ListItem
            clickHandler={() => {
              setSelectedItem(menu.heading);
            }}
            bgColor={
              menu.heading === selectedItem ? "rgba(47, 47, 47, 0.17)" : "white"
            }
            color={menu.color}
            initials={menu.initials}
            heading={menu.heading}
            key={index}
          />
        ))}
      </div>

      <div
        onClick={() => {
          alert("hi");
        }}
        className="sticky-button"
      >
        <Badge color={"#16008B"} initials={"\u271A"} />
      </div>
      {showNotesPopup && <NotesPopup />}
    </aside>
  );
};

export default Sidebar;
