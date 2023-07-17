"use client";

import { Button, Input, Menu, Space } from "antd";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useRouter } from "next/navigation";
import type { DrawerProps } from "antd/es/drawer";
import data from "../shared/data.json";

import Slider from "react-slick";

const { Search } = Input;

const CommonHeader = () => {
  const router = useRouter();
  const meriSettings = {
    className: "slider variable-width",

    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

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
              <MenuUnfoldOutlined
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
                onClick={() => {
                  router.push("/muheem");
                }}
                type="ghost"
                className="text-white   border-b-4 rounded-none text-lg font-sans-serif hover:border-b-orange-500 hover:bg-blue-800 w-2/3 h-63 md:h-auto lg:h-16 "
              >
                موہیم
              </Button>
              <Button
                onClick={() => {
                  router.push("/course");
                }}
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                کورس
              </Button>
              <Button
                onClick={() => {
                  router.push("/infographics");
                }}
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                انفوگرافکس
              </Button>
              <Button
                onClick={() => {
                  router.push("/listen");
                }}
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                سنین
              </Button>
              <Button
                onClick={() => {
                  router.push("/seeing");
                }}
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
                type="ghost"
              >
                دیکھیں
              </Button>
              <Button
                onClick={() => {
                  router.push("/learn");
                }}
                className="text-white  border-b-4 rounded-none text-lg  font-sans-serif  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16 "
                type="ghost"
              >
                پڑھیں
              </Button>
              <Button
                onClick={() => {
                  router.push("/magazine");
                }}
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
          <Search
            className="text-end"
            size="large"
            placeholder="کیا سیکھنا چاہتے ہیں؟"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[65%] max-lg:w-[90%] mt-16">
          <Slider {...meriSettings} className="ml-4 mr-4">
            {(data?.categories || []).map((catagory) => (
              <div
                className="font-bold border-b-4 rounded-none "
                key={catagory?.id}
              >
                <Button
                  type="ghost"
                  className="text-white px-5 hover:bg-blue-800 h-9  text-base font-sans-serif cursor-pointer hover:border-b-orange-500 active:bg-blue-800 bg-transparent text-center  border-b-4 rounded-none"
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
