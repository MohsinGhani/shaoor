import React from "react";

const CommonMainCard = ({ title, topic, creatorName, imageSrc }: any) => {
  return (
    <div>
      <p>{title}</p>
      <p>{topic}</p>
      <p>{creatorName}</p>
    </div>
  );
};

export default CommonMainCard;
