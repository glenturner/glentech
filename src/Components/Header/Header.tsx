import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "./NavLink";
import { Flex } from "../Flex";
import style from "./style.module.scss";
import { Button } from "../Button";
import { ForumOutlined } from "@material-ui/icons";
import { ToggleContactModal } from "../../Redux/Actions";
import { AppState } from "../../Redux/Models";
import { Logo } from "../Logo";
import { useHistory } from "react-router-dom";
import { Hamburger } from "../Hamburger";

export const Header = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLarge, setIsLarge] = useState(true);

  const navGroups = {
    // home: [
    //   { text: "Our Commitment", to: '/home#commitment' },
    //   { text: "Our Investment Philosophy", to: '/home#investment-philosophy' },
    //   { text: "Explore Our Services", to: '/home#explore-services' },
    // ],
  }

  return (
    <Flex id="app-header" row className={style.wrapper} align="center" justify="space-between">
      <Logo />
      <Flex justify="flex-end" style={{ alignSelf: isLarge ? 'flex-start' : 'center', flex: 1 }}>
        <Flex className={style.navSection} align="center" style={{
          transition: '200ms',
          padding: '20px', marginLeft: 80, alignSelf: 'center'
        }}>
          <Button
            IconComponent={ForumOutlined}
            onClick={() => dispatch(ToggleContactModal(true))}
            theme="callToActionBlack"
            containerStyle={{ padding: "5px 20px" }}
          >
            Say Hello
          </Button>
        </Flex>
      </Flex>
      <Hamburger />
    </Flex>
  );
};
