import React from "react";

const Badge = ({ initials, color,width='2.5rem',height='2.5rem',opacity=1 }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        opacity:opacity,
        backgroundColor: `${color}`,
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
        padding:0,
        margin:0
      }}
      className="center-text"
    >
      {initials}
    </div>
  );
};

export default Badge;
