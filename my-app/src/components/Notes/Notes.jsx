import React from "react";
import "./Notes.css";
import Default from "./Default";
import pocketNotes from "../../assets/pocket-notes.png";
import Lock from "../../assets/lock.png";

const Notes = () => {
  return (
    <section className="notes-container">
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
      </div>
    </section>
  );
};

export default Notes;
