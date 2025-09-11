import React, { useContext, useEffect, useState } from "react";
import "./Notes.css";
import Default from "./Default";
import pocketNotes from "../../assets/pocket-notes.png";
import Lock from "../../assets/lock.png";
import GroupNotes from "./GroupNotes";
import { NotesContext } from "../../hoc/NotesProvider";

const Notes = () => {
  const {selectedGroup,groups,modifySelectedGroup}=useContext(NotesContext);
  const [groupObj,setGroupObj]=useState({});
  useEffect(()=>{
    setGroupObj(groups.find((el)=>el.name===selectedGroup))
  },[selectedGroup])
  return (
    <section className="notes-container">
      {selectedGroup?<GroupNotes onBack={()=>{modifySelectedGroup('')}} groupObj={groupObj} />:
      <div className="default-layout">
        <Default
          heading={"Pocket Notes"}
          imgSrc={pocketNotes}
          imgSrc2={Lock}
          title1={
            "Send and receive messages without keeping your phone online."
          }
          title2={
            "Use pocket notes on upto 4 linked devices and 1 mobile phone."
          }
        />
      </div>}
    </section>
  );
};

export default Notes;
