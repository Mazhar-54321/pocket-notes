import React, { useContext, useEffect, useRef, useState } from "react";
import "./GroupNotes.css";
import Badge from "../Sidebar/Badge";
import { NotesContext } from "../../hoc/NotesProvider";
const GroupNotes = ({ groupObj = {}, onBack = () => {} }) => {
  const [note, setNote] = useState("");
  const ref = useRef();
  const [notesArray, setNotesArray] = useState([]);
  const { addNote, groups } = useContext(NotesContext);
  const modifyNotesArray = () => {
    setNotesArray(
      groups?.find((el) => el.name === groupObj?.name)?.notes ?? []
    );
  };
  useEffect(() => {
    setNote("");
    modifyNotesArray();
  }, [groupObj]);
  useEffect(() => {
    modifyNotesArray();
  }, [groups]);
  const keyEventHandler = (key) => {
    if (key === "Enter") {
      if (note?.trim()?.length) {
        addNote(groupObj?.name, note);
      }
      setNote("");
      ref.current.blur();
      setTimeout(() => {
        ref.current.focus();
      }, 10);
    }
  };
  return (
    <section className="group-notes">
      <header>
        <div className="left-arrow" onClick={onBack}>
          <i class="fas fa-arrow-left"></i>
        </div>

        <Badge color={groupObj?.color} initials={groupObj?.initials} />
        <div
          style={{
            marginLeft: "1rem",
            fontSize: "22px",
            textTransform: "capitalize",
            color: "white",
            textAlign: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          {groupObj?.name}
        </div>
      </header>
      <div
        className="notes-body"
        style={{
          height: "65%",
          flexGrow: 1,
          maxHeight: "70%",
          padding: "0.5rem",
          overflowY: "auto",
          scrollbarGutter: "stable",
          overflowX: "hidden",
        }}
      >
        {notesArray?.map((el) => (
          <div
            style={{
              marginBottom: "0.5rem",
              maxHeight: "16rem",
              borderRadius: "4px",
              padding: "1rem",
              backgroundColor: "white",
              wordBreak: "break-all",
            }}
          >
            <div
              style={{
                wordBreak: "break-all",
                maxHeight: "12rem",
                overflow: "auto",
              }}
            >
              {el?.note}
            </div>
            <div
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{el.date}</span>{" "}
              <Badge color={"black"} height="5px" width="5px" />
              <span style={{ fontWeight: "bold" }}>{el?.time}</span>{" "}
            </div>
          </div>
        ))}
      </div>

      <footer>
        <div
          style={{
            flexGrow: 1,
            width: "100%",
            display: "flex",
            position: "relative",
          }}
        >
          <textarea
            ref={ref}
            onKeyDown={(event) => {
              keyEventHandler(event.key);
            }}
            onChange={(event) => {
              setNote(event.target.value);
            }}
            value={note}
            placeholder="Enter your text here"
          ></textarea>
          {/* <button  onClick={()=>{addNote(groupObj?.name,note);setNote("")}} disabled={!note?.trim()?.length} style={{position:'absolute',bottom:'-5%',right:'0%',color:'white',background:'blue',margin:0,padding:0,opacity:note?.trim()?.length?1:0.2}}>Hi</button> */}
          <div
            onClick={() => {
              if (note?.trim()?.length) {
                addNote(groupObj?.name, note);
                setNote("");
                ref.current.focus();
              }
            }}
          >
            <i
              className="fab fa-telegram"
              style={{
                fontSize: "40px",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: note?.trim()?.length ? "blue" : "tan",
                position: "absolute",
                bottom: "-5%",
                right: "0%",
              }}
            ></i>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default GroupNotes;
