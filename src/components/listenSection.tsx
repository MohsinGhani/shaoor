import React from "react";
import Heading from "./heading";

import data from "../shared/data.json";
import Slider from "react-slick";
import { Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CommonCord from "./commonCord";
const ListenSection = () => {
  const meriSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-next absolute bottom-[50px] cursor-pointer text-[#5f5f5f] max-lg:left-4  max-lg:bottom-[-50px] left-[-4rem] max-lg:p-2  rounded-[100%] p-2 border-none z-10 text-[45px] bg-[#FFFFFF] max-lg:text-[12px] max-lg:text-black max-lg:bg-[#eba21a] "
      onClick={() => {
        console.log("clicking");
        onClick();
      }}
    >
      <LeftOutlined rev={"sg"} />
    </button>
  );

  const CustomNextArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-prev absolute right-[-4rem] max-lg:right-4 cursor-pointer max-lg:bottom-[-50px] max-lg:p-2 bottom-[50px]  border-none rounded-[100%]    p-2  text-[#5f5f5f] text-[45px] max-lg:text-[12px] bg-[#FFFFFF] max-lg:text-black max-lg:bg-[#eba21a] "
      onClick={onClick}
    >
      <RightOutlined rev={"edg"} />
    </button>
  );

  const { useBreakpoint } = Grid;

  const screen = useBreakpoint();
  return (
    <div className="max-w-[1280px] mx-auto ">
      <Heading title="سنیں" />

      <Slider
        {...meriSettings}
        className="  max-md:h-[180px] mb-[80px]"
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        {(data?.news || []).map((news) => (
          <CommonCord
            cardHeight=""
            imageSrc={news.image}
            title={""}
            topic={[]}
            writer={""}
            className=""
          />
        ))}
      </Slider>
    </div>
  );
};

export default ListenSection;
