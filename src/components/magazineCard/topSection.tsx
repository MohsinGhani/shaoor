import React from "react";
import Heading from "../heading";

import CommonCord from "../commonCord";
import data from "../../shared/data.json";
import Slider from "react-slick";
import { Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const TopSection = () => {
  const meriSettings = {
    slidesToShow: 2,
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
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-next absolute bottom-2 left-4 cursor-pointer bg-[#eba21a] rounded-[100%] p-2 border-none z-10 text-black"
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
      className="slider-arrow slider-arrow-prev absolute right-4 bottom-2  cursor-pointer border-none rounded-[100%]  bg-[#eba21a]  p-2 text-black"
      onClick={onClick}
    >
      <RightOutlined rev={"edg"} />
    </button>
  );

  const { useBreakpoint } = Grid;

  const screen = useBreakpoint();

  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        {!screen.md ? (
          <Slider
            {...meriSettings}
            className="max-md:h-[400px]"
            prevArrow={<CustomPrevArrow className="font-bold bg-[#751d1d]" />}
            nextArrow={<CustomNextArrow className="font-bold bg-[#d12e2e]" />}
          >
            {(data?.topSection || []).map((topSection) => (
              <CommonCord
                cardHeight=""
                className=""
                imageSrc={topSection.image}
                title={topSection.title}
                topic={topSection.topics}
                writer={topSection.writer}
              />
            ))}
          </Slider>
        ) : (
          <div className="flex   justify-end max-md:flex-col-reverse !h-[260px]">
            <div className=" max-w-[1280px] sm:grid grid-rows-1 grid-flow-col flex-wrap">
              {(data?.topSection || []).map((topSection) => (
                <CommonCord
                  cardHeight=""
                  className="h-[8rem]"
                  imageSrc={topSection.image}
                  title={topSection.title}
                  topic={topSection.topics}
                  writer={topSection.writer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TopSection;
