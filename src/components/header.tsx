import { Button, Input, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import type { DrawerProps } from "antd/es/drawer";

import Search from "antd/es/transfer/search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Header } = Layout;

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
    <div className="w-full sm:w-full">
      <div>
        <Header
          style={{
            backgroundColor: "#004C9B",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            width: "100%",
          }}
          className="flex h-16  flex-row items-center justify-between w-full relative z-1"
        >
          <Space>
            <MenuFoldOutlined
              rev="ege"
              className="text-white text-4xl block w-6 h-6 text-white-500 lg:hidden mr-6 items-center flex"
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
                <span className="text-xl font-medium">میگزین</span>
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

          <div className=" flex items-center flex-row w-2/3">
            <Button
              className="text-white mr-4 items-center h-11  hidden lg:flex "
              type="ghost"
            >
              <img
                className="w-10 h-10 rounded-full  items-center"
                src="/assets/images/logo.jpg"
              />
            </Button>
          </div>

          <div className="hidden lg:flex">
            <Button
              type="ghost"
              className="text-white  font-bold border-b-4 rounded-none   hover:border-b-orange-500 hover:bg-blue-800 w-2/3 h-63 md:h-auto lg:h-16 "
            >
              موہیم
            </Button>
            <Button
              className="text-white font-bold border-b-4 rounded-none  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
              type="ghost"
            >
              کورس
            </Button>
            <Button
              className="text-white font-bold border-b-4 rounded-none  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
              type="ghost"
            >
              انفوگرافکس
            </Button>
            <Button
              className="text-white font-bold border-b-4 rounded-none  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
              type="ghost"
            >
              سنین
            </Button>
            <Button
              className="text-white font-bold border-b-4 rounded-none  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
              type="ghost"
            >
              دیکھیں
            </Button>
            <Button
              className="text-white font-bold border-b-4 rounded-none  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16 "
              type="ghost"
            >
              پڑھیں
            </Button>
            <Button
              className=" text-white  font-bold border-b-4 rounded-none  hover:border-b-orange-500  hover:bg-blue-800  w-2/3 h-63 md:h-auto lg:h-16"
              type="ghost"
            >
              میگزین
            </Button>
          </div>
          <Button className="text-white mr-4 items-center h-11" type="ghost">
            <img
              className="w-10 h-10 rounded-full  items-center"
              src="/assets/images/logo.jpg"
            />
          </Button>
        </Header>

        <div
          style={{ backgroundColor: "#004C9B" }}
          className="h-32 flex items-center justify-center"
        >
          {" "}
          <div className=" sm:w-2/3 ">
            <Search placeholder="input search text" />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#004C9B",
            height: "36px",
            alignItems: " center",
          }}
        >
          <div style={{ width: "90%" }}>
            <Slider {...meriSettings} className="ml-4 mr-4">
              {meriCatagory.map((catagory) => (
                <div className="font-bold border-b-4 rounded-none ">
                  <Button
                    type="ghost"
                    className="text-white px-5 hover:bg-blue-800 h-9 hover:border-b-orange-500 active:bg-blue-800 bg-transparent text-center  font-bold border-b-4 rounded-none"
                  >
                    {catagory.ur}
                  </Button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="h-96">sdrhwr</div>
      <div
        id="footer"
        className="bg-black"
        style={{ backgroundColor: " #004C9B" }}
      >
        <div className="pt-12 container mx-auto p-6">
          <div className=" xl:grid-cols-10 pb-8 xl:border-b xl:border-white/25 flex">
            <div className="social xl:col-span-5 text-white">
              <div className="grid xl:grid-cols-5">
                <div className="social-content xl:col-span-3 xl:px-2">
                  <div className="social-media">
                    <div className="mb-2">
                      <h2 className="font-proxima-nova text-base text-jordy-500 leading-tight tracking-tight-1 font-semibold text-left">
                        shaoor Newsletter
                      </h2>
                    </div>
                    <div className="mb-10">
                      <div>
                        <div className="subscribe-form xl:mb-0 mb-5">
                          <form data-hs-cf-bound="true">
                            <div className="flex">
                              <div className="grow h-14">
                                <input
                                  type="email"
                                  aria-label="Email"
                                  className="grow w-full leading-normal border h-10 border-grey-light rounded-none px-3 relative text-grey-800 border-gray-200"
                                  placeholder="Your email"
                                  name="email"
                                />
                                <input
                                  type="hidden"
                                  name="yaqeen_subscriber_source"
                                  value="footer"
                                />
                                <div></div>
                                <div className="flex-none w-26 h-14">
                                  <button
                                    type="submit"
                                    className="bg-carrot-800 px-4 font-bold py-2 flex items-center whitespace-nowrap opacity-60 cursor-not-allowed focus:outline-none"
                                    // disabled="sag"
                                  >
                                    <span className="font-proxima-nova text-base text-white leading-normal tracking-normal font-normal">
                                      Subscribe
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div>
                            <span className="font-proxima-nova text-xs text-grey-400 leading-normal tracking-normal font-normal">
                              By subscribing, you agree to our
                            </span>
                            <b>
                              <a
                                target="_blank"
                                className="focus:border-jordy-400 focus:outline-none border-transparent"
                                href="/privacy-policy"
                              >
                                Privacy
                              </a>
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact xl:col-span-5 text-white text-base mb-12 xl:mb-0">
              <div className="pb-6">
                <span>
                  <img
                    className="w-10  h-10 rounded-full "
                    src="/assets/images/logo.jpg"
                  />
                </span>
              </div>
              <div className="pl-2">
                <h2 className="font-proxima-nova text-base text-white leading-tight tracking-tight-1 font-semibold text-left">
                  shaoor Institute for Islamic Research
                </h2>
                <div className="mb-6 whitespace-pre-wrap">
                  <span className="font-proxima-nova text-base text-white leading-normal tracking-normal font-normal">
                    7750 N. MacArthur Blvd Suite 120237, Irving, TX 75063
                  </span>
                </div>
                <a
                  className="focus:outline-none"
                  href="mailto:info@yaqeeninstitute.org"
                  data-testid="footer-mail"
                  rel="noreferrer noopener"
                >
                  <span className="font-proxima-nova text-base text-white hover:text-carrot-500 leading-normal tracking-normal font-bold">
                    info@shaoorinstitute.org
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
