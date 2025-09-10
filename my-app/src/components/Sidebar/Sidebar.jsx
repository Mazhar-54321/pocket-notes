import React, { useState } from "react";
import "./Sidebar.css";
import ListItem from "./ListItem";
import Badge from "./Badge";
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
  return (
    <aside className="sidebar-container">
      <h2 style={{ fontSize: "35px" }}>Pocket Notes</h2>
      <div style={{ maxHeight: "85%", overflowY: "auto" }}>
        {menuList?.map((menu, index) => (
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
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      >
        <Badge color={"#16008B"} initials={"\u271A"} />
      </div>
    </aside>
  );
};

export default Sidebar;
