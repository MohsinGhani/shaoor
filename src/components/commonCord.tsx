import React from "react";

type IProps = {
  title: string;
  topic: string;
  writer: string;
  imageSrc: string;
};

const CommonCord = ({ title, topic, writer, imageSrc }: IProps) => {
  return (
    <div className="w-full">
      <img className="w-[100%] h-44" src={imageSrc} />

      <div className="leading-8">
        <p className="text-right  text-[20px]">{title}</p>
        <p className="text-right  font-bold text-[20px]">{topic}</p>
        <p className="text-right  text-[20px]">{writer}</p>
      </div>
    </div>
  );
};

export default CommonCord;
