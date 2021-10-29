import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Flex } from "../../Flex";
import style from "./style.module.scss";
import { HashLink as Link } from 'react-router-hash-link';

export const NavLink = (props: {
  text: any;
  subItems?: { text: string, to: string }[];
  route: string;
  alternate?: boolean;
  style?: any;
  selected?: boolean;
}) => {
  const history = useHistory();
  const [hovered, setHovered] = useState(false);

  return (
    <Flex column style={{ position: "relative" }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Flex
        column
        align="center"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className={`${style.wrapper} ${props.alternate ? style.alternate : style.primary
          } ${props.selected ? style.primaryActive : ''}`}
        style={{ ...props.style }}
        onClick={() => history.push(props.route)}
      >
        <Link smooth to={props.route}><span>{props.text}</span></Link>
        {hovered && props.subItems?.length &&
          <Flex column onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ padding: 10, borderRadius: 10, background: "white", position: 'absolute', top: '42px', boxShadow: '0px 15px 30px -5px rgba(0,0,0,0.5)' }}>
            {props.subItems.map((item, idx) => <Link smooth to={item.to}><Flex className={`${style.wrapper} ${style.subLink}`} style={{}}><span>{item.text}</span></Flex></Link>)}
          </Flex>}
      </Flex>
    </Flex>
  );
};
