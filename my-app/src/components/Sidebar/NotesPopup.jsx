import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./NotesPopup.css";
import Badge from "./Badge";
import { NotesContext } from "../../hoc/NotesProvider";

const NotesPopup = ({ onOutsideClick }) => {
  const { addGroup } = useContext(NotesContext);
  const [groupObj, setGroupObj] = useState({ name: "", color: "" });
  const [isValidGroup, setIsValidGroup] = useState(false);
  const innerRef = useRef();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target === innerRef.current) {
        onOutsideClick();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const clickHandler = () => {
    addGroup({
      ...groupObj,
      name: groupObj.name.trim(),
      initials: groupObj.name
        .trim()
        .split(" ")
        .filter((el, index) => index <= 1)
        .map((el) => el[0].toUpperCase())
        .join(""),
    });
    onOutsideClick()
  };
  useEffect(() => {
    setIsValidGroup(groupObj?.name?.trim()?.length && groupObj?.color?.length);
  }, [groupObj]);
  return ReactDOM.createPortal(
    <div ref={innerRef} className="notes-popup">
      <div className="dialog">
        <div>Create New group</div>
        <div style={{ display: "flex" }}>
          <span>Group Name</span>{" "}
          <input
            onChange={(event) => {
              setGroupObj((prev) => ({ ...prev, name: event.target.value }));
            }}
            style={{ flexGrow: 1 }}
            type="text"
            placeholder="Enter group name"
          />
        </div>
        <div>
          <div style={{ display: "flex", gap: "0.5rem", marginLeft: 0 }}>
            <span style={{ marginRight: "1rem" }}>Choose color</span>
            {[
              "#B38BFA",
              "#FF79F2",
              "#43E6FC",
              "#F19576",
              "#0047FF",
              "#6691FF",
            ].map((el,index) => (
              <div
              key={index}
                onClick={() => {
                  setGroupObj((prev) => ({ ...prev, color: el }));
                }}
              >
                <Badge
                  width="1.5rem"
                  height="1.5rem"
                  color={el}
                  key={el}
                  initials={""}
                  opacity={groupObj.color === el ? 0.2 : 1}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={clickHandler}
            style={{ opacity: isValidGroup ? 1 : 0.2 }}
            disabled={!isValidGroup}
          >
            Create
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NotesPopup;
