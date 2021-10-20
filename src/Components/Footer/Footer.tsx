import { ForumOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Flex } from "../Flex";
import { Button } from "../Button";
import { Linkedin, Github } from "../../Assets";
import { ReusableStaticImage } from "../ReusableStaticImage";
import { AppLogo } from "../../Assets";
import { NavGroup, NavGroupItem } from "./NavGroup";
import { ToggleContactModal } from "../../Redux/Actions";
import style from "./style.module.scss";

export const Footer = () => {
  const dispatch = useDispatch();
  const navGroups: NavGroupItem[] = [
    {
      main: { label: "", to: '/#landing' },
      items: [
        { label: "Landing", to: '/#landing' },
      ]
    },
    {
      main: { label: "", to: '/#about' },
      items: [
        { label: "About", to: '/#about' },
      ]
    },
    {
      main: { label: "", to: '/#projects' },
      items: [
        { label: "Projects", to: '/#projects' },
      ]
    },
  ];

  return (
    <Flex column className={style.wrapper}>
      <Flex style={{ flex: 1 }} justify="center" align="flex-start">
        <img
          draggable="false"
          style={{ height: 60, width: 'auto' }}
          alt="Logo"
          src={AppLogo} />
      </Flex>
      <Flex center className={style.grabber_row}>
        <span>Living, learning, & leveling up<br /> one day at a time.</span>
      </Flex>
      <Flex
        className={style.nav_footer}
        style={{ paddingTop: 50, paddingBottom: 50 }}
        row
        justify="center"
        align="flex-start"
      >
        <Flex row justify="flex-end" align="flex-start" className={style.navGroupWrapper}>
          {navGroups.map((g) => (
            <NavGroup item={g} />
          ))}
        </Flex>
      </Flex>
      <Flex center className={style.media_icons}>
        <ReusableStaticImage
          onClick={() => window.open('https://github.com/glenturner', '_blank')}
          classes={style.github_icon}
          image={Github}
          width={2}
        />
        <ReusableStaticImage
          onClick={() => window.open('https://www.linkedin.com/in/glen-turner-a1870222', '_blank')}
          classes={style.linkedin_icon}
          image={Linkedin}
          width={2}
        />
      </Flex>
    </Flex>
  );
};
