import { MenuProps } from "antd";
import { Roles } from "./roles"; // Assuming you have defined roles in this file
import { useNavigate } from "react-router-dom";
import { CommentOutlined, EyeInvisibleOutlined, EyeOutlined, FileTextOutlined, QuestionOutlined, RollbackOutlined, WarningOutlined } from "@ant-design/icons"; // Import icons
import React from "react";

export const getNavbarItems = (role: Roles): MenuProps["items"] => {
  const router = useNavigate();

  const allItems: MenuProps["items"] = [
    {
      key: "0",
      label: "Etirazlar",
      icon: React.createElement(WarningOutlined),
      onClick: () => {
        router("/objections");
      },
    },
    {
      key: "1",
      label: "Baxılacaq olanlar",
      icon: React.createElement(EyeOutlined),
      onClick: () => {
        router("/reviewables");
      },
    },
    {
      key: "2",
      label: "İmtina Olunanlar",
      icon: React.createElement(RollbackOutlined),
      onClick: () => {
        router("/rejections");
      },
    },
    {
      key: "3",
      label: "Kuratorun rəyləri",
      icon: React.createElement(CommentOutlined),
      onClick: () => {
        router("/curator-comments");
      },
    },
    {
      key: "4",
      label: "Gözə görünməzlər",
      icon: React.createElement(EyeInvisibleOutlined),
      onClick: () => {
        router("/invisibles");
      },
    },
    {
      key: "5",
      label: "Suallar",
      icon: React.createElement(QuestionOutlined),
      onClick: () => {
        router("/questions");
      },
    },
    {
      key: "6",
      label: "Arxiv",
      icon: React.createElement(FileTextOutlined),
      onClick: () => {
        router("/archive");
      },
    },
    {
      key: "7",
      label: "Hamısı",
      icon: React.createElement(FileTextOutlined),
      onClick: () => {
        router("/all");
      },
    },
  ];

  // Define access control for different roles
  const roleAccess = {
    [Roles.USER]: ["1", "2", "3", "4", "7"],
    [Roles.ACCOUNTABLE]: ["1", "2", "3", "4", "5", "7"],
    [Roles.RESEARCHER]: ["1", "2", "3", "4", "7"],
    [Roles.CURATOR]: ["2", "3", "5", "7"],
    [Roles.CENTER_MANAGER]: ["2", "3", "4", "5", "7"],
    [Roles.CHIEF]: ["0", "1", "3", "4", "5", "6", "7"],
  };

  // Filter the items based on the role
  const allowedKeys = roleAccess[role] || [];
  return allItems.filter((item) => item !== null && allowedKeys.includes(item.key as string));
};
