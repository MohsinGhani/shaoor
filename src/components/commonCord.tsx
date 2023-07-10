import React from "react";
import Image from "next/image";
type IProps = {
  title: string;
  topic: string;
  writer: string;
  imageSrc: string;
};

const CommonCord = ({ title, topic, writer, imageSrc }: IProps) => {
  return (
    <div className="w-full pl-[16px]  pr-[16px] ">
      <Image
        className="w-full  h-44  object-cover"
        alt=""
        src={imageSrc}
        width={500}
        height={200}
      />

      <div className="leading-8">
        <p className="text-right  text-[20px] text-[#004C9B] font-bold leading-6">
          {title}
        </p>
        <p className="text-right  font-bold text-[20px] text-[#1b1b1b]">
          {topic}
        </p>
        <p className="text-right  text-[17px]  font-bold text-[#929292]">
          {writer}
        </p>
      </div>
    </div>
  );
};

export default CommonCord;
