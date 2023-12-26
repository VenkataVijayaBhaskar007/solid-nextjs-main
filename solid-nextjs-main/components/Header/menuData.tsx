import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "#home",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "#about",
  },


  {
    id: 3,
    title: "Companies",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Atoms digital solutins",
        newTab: false,
        path: "/atom",
      },
      {
        id: 34,
        title: "Atoms Education",
        newTab: false,
        path: "/blog",
      },
      {
        id: 35,
        title: "Atoms 2.0",
        newTab: false,
        path: "/atoms",
      },
     
      {
        id: 35.1,
        title: "",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/team",
  },
];

export default menuData;
