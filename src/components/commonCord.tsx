import React from "react";

type IProps = {
  title: string;
  topic: string;
  writer: string;
  imageSrc: string;
};

const CommonCord = ({ title, topic, writer, imageSrc }: IProps) => {
  return (
    // <div>1</div>
    <div className="w-full p-4 ">
      <img className="w-[100%] h-44" src={imageSrc} />

      <div className="leading-8">
        <p className="text-right  text-[20px] text-[#004C9B] font-bold">
          {title}
        </p>
        <p className="text-right  font-bold text-[20px] text-[#454647]">
          {topic}
        </p>
        <p className="text-right  text-[20px]  font-bold text-[#ccc]">
          {writer}
        </p>
      </div>
    </div>
  );
};

export default CommonCord;
