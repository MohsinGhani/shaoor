import { Button, Input, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const { Search } = Input;

const CommonHeader = () => {
  const meriSettings = {
    className: "slider variable-width",

    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const meriCatagory = [
    { id: "c1", en: "Secularism", ur: "سیکولرازم" },

    { id: "c2", en: "God and Religion", ur: "خدا اور مذہب" },

    { id: "c3", en: "Capitalism", ur: "کیپیٹلزم" },

    { id: "c4", en: "liberalism", ur: "لبرل ازم" },

    { id: "c5", en: "Minority", ur: "اقلیت" },

    { id: "c6", en: "Modernity", ur: "جدیدیت" },

    { id: "c7", en: "Psychology ", ur: "نفسیات " },

    { id: "c8", en: "Philosophy", ur: "فلسفہ" },

    { id: "c9", en: "Biology", ur: "حیاتیات" },

    { id: "c10", en: "History", ur: "تاریخ" },

    { id: "c11", en: "Religious studies", ur: "علوم دینیہ" },

    { id: "c12", en: "Mental disorders", ur: "عقلی اشکالات" },

    { id: "c13", en: "God", ur: "خدا" },

    { id: "c14", en: "Mission", ur: "رسالت" },

    { id: "c15", en: "Hereafter", ur: "آخرت" },

    { id: "c16", en: "destiny", ur: "تقدیر" },

    { id: "c17", en: "Capitalism", ur: " 1 کیپیٹلزم" },

    { id: "c18", en: "liberalism", ur: "1 لبرل ازم" },

    { id: "c19", en: "Minority", ur: "1 اقلیت" },

    { id: "c20", en: "Modernity", ur: "1 جدیدیت" },

    { id: "c21", en: "Psychology ", ur: "1 نفسیات " },

    { id: "c22", en: "Philosophy", ur: "1 فلسفہ" },

    { id: "c23", en: "Biology", ur: "1 حیاتیات" },

    { id: "c24", en: "History", ur: "1 تاریخ" },

    { id: "c25", en: "Religious studies", ur: "1 علوم دینیہ" },

    { id: "c26", en: "Mental disorders", ur: "1 عقلی اشکالات" },

    { id: "c27", en: "God", ur: "1 خدا" },

    { id: "c28", en: "Mission", ur: "1 رسالت" },

    { id: "c29", en: "Hereafter", ur: "1 آخرت" },

    { id: "c30", en: "destiny", ur: "1 تقدیر" },
  ];

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="  bg-[#004C9B]">
      <div className="w-full mx-auto px-4 bg-[#004C9B] fixed top-0 z-50 right-0 shadow-xl">
        <nav className=" max-w-[1280px] flex justify-between items-center mx-auto max-lg:mt-2 max-lg:mb-2">
          <div className="flex">
            <Space>
              <MenuFoldOutlined
                rev="ege"
                className="text-white text-4xl w-6 h-6 text-white-500 lg:hidden mr-6 items-center flex"
                onClick={showDrawer}
              />
            </Space>
            <Drawer
              placement={placement}
              width={500}
              onClose={onClose}
              open={open}
            >
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
              >
                <Menu.Item key="1">
                  <span className="text-xl font-medium  ">میگزین</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <span className="text-xl font-medium">پڑھیں</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span className="text-xl font-medium"> دیکھیں</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span className="text-xl font-medium">سنین</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span className="text-xl font-medium">انفوگرافکس</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span className="text-xl font-medium"> کورس</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span className="text-xl font-medium">موہیم</span>
                </Menu.Item>
              </Menu>
            </Drawer>
            <div className="flex">
              <Button
                className="text-white mr-4 items-center h-11 p-0 hidden lg:flex"
                type="ghost"
              >
                <img
                  className="w-10 h-10 rounded-full  items-center"
                  src="/assets/images/logo.jpg"
                />
              </Button>
            </div>
          </div>

          <div className="flex">
            <div className="hidden lg:flex">
              <Button
                type="ghost"
                className="text-white   border-b-4 rounded-none text-lg font-sans-serif hover:border-b-orange-500 hover:bg-blue-800 w-2/3 h-63 md:h-auto lg:h-16 "
              >
                موہیم
              </Button>
              <Button
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                کورس
              </Button>
              <Button
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                انفوگرافکس
              </Button>
              <Button
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                سنین
              </Button>
              <Button
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                دیکھیں
              </Button>
              <Button
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16 "
                type="ghost"
              >
                پڑھیں
              </Button>
              <Button
                className=" text-white   border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                میگزین
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="text-white  items-center h-11 p-0  flex"
                type="ghost"
              >
                <img
                  className="w-10 h-10 rounded-full  items-center flex"
                  src="/assets/images/logo.jpg"
                />
              </Button>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-1/2  max-lg:w-[90%]  flex items-center justify-center mt-32">
          {" "}
          <Search size="large" placeholder="What do you want to learn" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[65%] max-lg:w-[90%] mt-16">
          <Slider {...meriSettings} className="ml-4 mr-4">
            {meriCatagory.map((catagory) => (
              <div
                className="font-bold border-b-4 rounded-none "
                key={catagory?.id}
              >
                <Button
                  type="ghost"
                  className="text-white px-5 hover:bg-blue-800 h-9  text-base font-sans-serif hover:border-b-orange-500 active:bg-blue-800 bg-transparent text-center  border-b-4 rounded-none"
                >
                  {catagory.ur}
                </Button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
