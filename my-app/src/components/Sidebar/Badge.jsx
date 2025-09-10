import React from "react";

const Badge = ({ initials, color }) => {
  console.log(initials,color)
  return (
    <div
      style={{
        width: "2.5rem",
        height: "2.5rem",
        border: `1px solid ${color}`,
        backgroundColor: `${color}`,
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
      }}
      className="center-text"
    >
      {initials}
    </div>
  );
};

export default Badge;
