import React from "react";
type IProps = {
  title: string;
};

const Heading = ({ title }: IProps) => {
  return (
    <div className="flex justify-end w-full h-32 items-center">
      <u className="underline-offset-8 text-[orange]">
        <p className="font-bold text-[40px] text-[#004C9B] ">{title}</p>
      </u>
    </div>
  );
};

export default Heading;
