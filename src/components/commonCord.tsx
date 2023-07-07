import React from "react";

const CommonCord = ({ title, topic, creatorName, imageSrc }: any) => {
  return (
    <div className="max-w-[300px]">
      <img className="w-full" src={imageSrc} />

      <div className=" w-full flex flex-col">
        <p className="text-right tracking-wider text-[20px]">{title}</p>
        <p className="text-right tracking-wider  font-bold text-[20px]">
          {topic}
        </p>
        <p className="text-right  tracking-wider  text-[20px]">{creatorName}</p>
      </div>
    </div>
  );
};

export default CommonCord;
