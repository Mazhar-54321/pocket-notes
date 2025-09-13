import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./AddGroupPopup.css";
import Badge from "./Badge";
import { NotesContext } from "../../hoc/NotesProvider";

const AddGroupPopup = ({ onOutsideClick }) => {
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
    setIsValidGroup(groupObj?.name?.trim()?.length &&groupObj?.name?.trim()?.length<=20 && groupObj?.color?.length);
  }, [groupObj]);
  return ReactDOM.createPortal(
    <div ref={innerRef} className="notes-popup">
      <div className="dialog">
        <div>Create New group</div>
        <div style={{ display: "flex",position:'relative',marginBottom:groupObj?.name?.length>20?'10px':'0px' }}>
          <span>Group Name</span>{" "}
          <input
            onChange={(event) => {
              setGroupObj((prev) => ({ ...prev, name: event.target.value }));
            }}
            style={{ flexGrow: 1 }}
            type="text"
            placeholder="Enter group name"
          />
          {groupObj?.name?.length>20 && <span style={{position:'absolute',bottom:'-20px',right:'10px',color:'rgb(0,0,0,0.40)'}}>Maximum 20 chars</span>}
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
                  opacity={groupObj.color === el ? 1 : 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="button-container" >
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

export default AddGroupPopup;
