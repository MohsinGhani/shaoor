import React from "react";
import Heading from "./heading";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CommonCord from "./commonCord";
import Slider from "react-slick";
import data from "../shared/data.json";
import { Grid } from "antd";

const Infographics = () => {
  const meriSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-next absolute bottom-2 left-4 cursor-pointer bg-[#eba21a] rounded-[100%] max-lg:left-4  max-lg:bottom-[-214px] max-lg:p-2  p-2 border-none z-10 text-black"
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
      className="slider-arrow slider-arrow-prev absolute right-4 bottom-2  cursor-pointer border-none rounded-[100%]  max-lg:right-4  max-lg:bottom-[-214px] max-lg:p-2 bg-[#eba21a]  p-2 text-black"
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
        <Heading title="انفوگرافکس" />

        {!screen.md ? (
          <div className="h-[701px]">
            <Slider
              {...meriSettings}
              className="max-md:h-[400px]"
              prevArrow={<CustomPrevArrow className="font-bold bg-[#751d1d]" />}
              nextArrow={<CustomNextArrow className="font-bold bg-[#d12e2e]" />}
            >
              {(data?.infograpics || []).map((infograpics) => (
                <CommonCord
                  className="h-[57%]"
                  imageSrc={infograpics.image}
                  title={infograpics.title}
                  topic={infograpics.topics}
                  writer={infograpics.writer}
                  cardHeight="max-sm: h-[700px]"
                />
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex justify-center max-md:flex-col-reverse  h-[701px]">
            <div className=" max-w-[1280px] sm:grid grid-rows-1 grid-flow-col flex-wrap">
              {(data?.infograpics || []).map((infograpics) => (
                <CommonCord
                  cardHeight=""
                  className="h-[57%]"
                  imageSrc={infograpics.image}
                  title={infograpics.title}
                  topic={infograpics.topics}
                  writer={infograpics.writer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Infographics;
