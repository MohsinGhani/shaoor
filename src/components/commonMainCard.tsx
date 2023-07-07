import React from "react";
type IProps = {
  title: string;
  topic: string;
  creatorName: string;
  imageSrc: string;
};
const CommonMainCard = ({ title, topic, creatorName, imageSrc }: IProps) => {
  return (
    <div className="max-w-[350px] max-h-[100vh] ">
      <img className="w-full  min-h-[90vh]" src={imageSrc} />
      <div className="leading-8">
        <p className="text-right text-[20px]">{title}</p>
        <p className="text-right font-bold text-[20px]">{topic}</p>
        <p className="text-right text-[20px]">{creatorName}</p>
      </div>
    </div>
  );
};

export default CommonMainCard;
