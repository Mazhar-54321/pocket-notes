import React from "react";
import ReactDOM from "react-dom";
import "./NotesPopup.css";
import Badge from "./Badge";

const NotesPopup = () => {
  return ReactDOM.createPortal(
    <div className="notes-popup">
      <div className="dialog">
        <div>Create New group</div>
        <div style={{display:'flex'}}>
          <span>Group Name</span>  <input style={{flexGrow:1}} type="text" placeholder="Enter group name" />
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
            ].map((el) => (
              <Badge
                width="1.5rem"
                height="1.5rem"
                color={el}
                key={el}
                initials={""}
              />
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button>Create</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default NotesPopup;
