import React from "react";
import { Flex } from "../Flex";
import { HashLink as Link } from 'react-router-hash-link';
import style from "./style.module.scss";

export interface SubItem {
  label: string;
  to?: any;
}

export interface NavGroupItem {
  main: SubItem;
  items?: SubItem[];
}

export interface FooterNavGroupProps {
  item: NavGroupItem;
}

export const NavGroup = ({ item }: FooterNavGroupProps) => {
  const { main, items } = item;
  return (
    <Flex
      className={style.navGroup}
      column
      justify="flex-start"
      align="flex-start"
    >
      <Flex className={style.mainButton}>
        <h4 style={{ fontSize: 18, whiteSpace: "nowrap" }}>{main.label}</h4>
        <div className={style.mainDivider} />
      </Flex>
      {!!items?.length && (
        <ul>
          {items.map((i, key) => (
            <li key={key} style={{ color: '#201E50' }}>
              <Link smooth to={i.to}><button>{i.label}</button></Link>
              <div className={style.mainDivider} />
            </li>
          ))}
        </ul>
      )}
    </Flex>
  );
};
