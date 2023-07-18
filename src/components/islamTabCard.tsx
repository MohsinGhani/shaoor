import React from "react";
import Image from "next/image";
import CardFooter from "./cardFooter";

type IProps = {
  title: string;
  topic: string[];
  writer: string;
  imageSrc: string;
  className: string;
  cardHeight: string;
};

const IslamTabCard = ({
  title,
  topic,
  writer,
  imageSrc,
  className,
  cardHeight,
}: IProps) => {
  return (
    <div className={` pl-[16px]  pr-[16px] bg-[#ccc]  ${cardHeight}`}>
      {/* <Image
        // {`w-full h-44  object-cove${className}`}
        className={`w-full h-44  object-cover  ${className}`}
        alt=""
        src={imageSrc}
        width={500}
        height={0}
      /> */}
      <div className="leading-8 max-w-auto max-sm:mt-[13px]">
        <p className="text-right  text-[20px] text-[#004C9B] font-bold overflow-hidden ">
          {title}
        </p>
        <p className="text-right  font-bold text-[20px] text-[#1b1b1b] ">
          {topic}
        </p>
        <p className="text-right  text-[17px]  font-bold text-[#1b1b1b]">
          {writer}
        </p>
      </div>
    </div>
  );
};

export default IslamTabCard;
