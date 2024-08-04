import React from "react";

const LabelTag = ({ label = "Trending" }) => {
  return (
    <span className="px-5 py-1 text-2xl text-black font-bold">{label}</span>
  );
};

export default LabelTag;
