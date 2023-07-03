import { Button, Divider, Input, Layout, Menu, Space } from "antd";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Drawer, Radio } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import type { RadioChangeEvent } from "antd/es/radio";
import Icon from "@ant-design/icons/lib/components/Icon";
import SubMenu from "antd/es/menu/SubMenu";

const { Header } = Layout;
const { Search } = Input;

const CommonHeader = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header className="flex h-16 bg-blue-900 flex-row items-center justify-between ">
      <Space>
        <MenuFoldOutlined
          className="text-white text-4xl  block lg:hidden w-6 h-6 text-white-500 lg:text-white mr-6"
          onClick={showDrawer}
        />
      </Space>
      <Drawer placement={placement} width={500} onClose={onClose} open={open}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          //   theme="dark"
          //   inlineCollapsed={this.state.collapsed}
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

      <div className=" flex items-center flex-row w-2/4">
        <div className="text-white mr-4 items-center">
          <img
            className="w-10  h-10 rounded-full mt-6 "
            src="/assets/images/logo.jpg"
          />
        </div>
      </div>

      <div className="hidden sm:flex ">
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
      <div className="text-white mr-4 items-center">
        <img
          className="w-10  h-10 rounded-full mt-6 "
          src="/assets/images/logo.jpg"
        />
      </div>
    </Header>
  );
};

export default CommonHeader;
