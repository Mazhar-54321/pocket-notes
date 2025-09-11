import React from "react";

const Badge = ({ initials, color,width='2.5rem',height='2.5rem',border='transparent' }) => {
  console.log(initials,color)
  return (
    <div
      style={{
        width: width,
        height: height,
        border: `1px solid ${border}`,
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
