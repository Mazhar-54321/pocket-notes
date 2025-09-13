import { useContext, useState } from "react";
import "./Sidebar.css";
import ListItem from "./ListItem";
import Badge from "./Badge";
import { NotesContext } from "../../hoc/NotesProvider";
import AddGroupPopup from "./AddGroupPopup";

const Sidebar = () => {
  const [showAddGroupPopup, setShowAddGroupPopup] = useState(false);
  const { groups, selectedGroup, modifySelectedGroup } =
    useContext(NotesContext);

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
          setShowAddGroupPopup(true);
        }}
        className="sticky-button"
      >
        <Badge color={"#16008B"} initials={"\u271A"} />
      </div>
      {showAddGroupPopup && (
        <AddGroupPopup
          onOutsideClick={() => {
            setShowAddGroupPopup(false);
          }}
        />
      )}
    </aside>
  );
};

export default Sidebar;
