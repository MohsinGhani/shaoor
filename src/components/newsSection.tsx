import React from "react";
import Heading from "./heading";
import CommonMainCard from "./commonMainCard";
import CommonCord from "./commonCord";
import data from "../shared/data.json";
import Slider from "react-slick";
import { Grid } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const NewsSection = () => {
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
    ],
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      className="slider-arrow slider-arrow-next absolute bottom-2 left-6 bg-[#eba21a] rounded-full p-2 border-none z-10"
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
      className="slider-arrow slider-arrow-prev absolute right-4 bottom-2 border-none  bg-[#eba21a] rounded-full p-2"
      onClick={onClick}
    >
      <RightOutlined rev={"edg"} />
    </button>
  );

  const { useBreakpoint } = Grid;

  const screen = useBreakpoint();

  return (
    <>
      <div className="max-w-[1280px] mx-auto  ">
        <Heading title="تزاترین" />
        {/* flex justify-center max-md:flex-col-reverse */}

        {!screen.md ? (
          <Slider
            {...meriSettings}
            className="  max-md:h-[400px]  "
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
          >
            {(data?.news || []).map((news) => (
              <CommonCord
                imageSrc={news.image}
                title={news.title}
                topic={news.topics[0]}
                writer={news.writer}
              />
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center max-md:flex-col-reverse">
            <div className="gap-4 max-w-[1280px] sm:grid grid-rows-2 grid-flow-col flex-wrap max-sm:pl-3 max-sm:pr-3">
              {(data?.news || []).map((news) => (
                <CommonCord
                  imageSrc={news.image}
                  title={news.title}
                  topic={news.topics[0]}
                  writer={news.writer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsSection;
