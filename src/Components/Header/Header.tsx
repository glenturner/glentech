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
  const [selectedRoute, setSelectedRoute] = useState<any>(null);


  // useEffect(() => {
  //   setSelectedRoute(history.location.pathname)
  //   //@ts-ignore
  //   const unlisten = history.listen((location: any, action: any) => {
  //     // If there's a hash in the url then don't manage the scroll
  //     if (!location.hash) {
  //       document.body.scrollTop = 0; // For Safari
  //       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  //     }
  //     setSelectedRoute(location.pathname)
  //   });
  //   return () => { unlisten() }
  // }, [history])

  const navGroups = {
    // home: [
    //   { text: "Our Commitment", to: '/home#commitment' },
    //   { text: "Our Investment Philosophy", to: '/home#investment-philosophy' },
    //   { text: "Explore Our Services", to: '/home#explore-services' },
    // ],
    services: [
      { text: "Wealth Managment", to: '/services#wealth-management' },
      { text: "Tax Planning & Strategies", to: '/services#tax-strategies' },
      { text: "Risk & Insurance Management", to: '/services#risk' },
      { text: "Financial Planning", to: '/services#financial' },
      { text: "Estate Planning", to: '/services#estate-planning' }
    ],
    about: [
      { text: "Our Vision", to: '/about#our-vision' },
      { text: "Our Principles", to: '/about#our-principles' },
      { text: "Our Team", to: '/about#team-bio' },
    ],
  }

  return (
    <Flex id="app-header" row className={style.wrapper} align="center" justify="space-between">
      <Logo />
      <Flex justify="flex-end" style={{ alignSelf: isLarge ? 'flex-start' : 'center', flex: 1 }}>
        <Flex className={style.navSection} align="center" style={{
          transition: '200ms',
          padding: '20px', marginLeft: 80, alignSelf: 'center'
        }}>
          {/* <NavLink route="/" text={"Home"} selected={selectedRoute === '/'} />
          <NavLink subItems={navGroups.services} route="/services" text={"Services"} selected={selectedRoute === '/services'} />
          <NavLink subItems={navGroups.about} route="/about" text={"About Us"} selected={selectedRoute === '/about'} /> */}
          {/* <NavLink route="/events" text={"Events"} selected={selectedRoute === '/events'} />
          <NavLink route="/media" text={"Media"} selected={selectedRoute === '/media'} />
          <NavLink route="/portfolio" text={"Portfolio"} selected={selectedRoute === '/portfolio'} /> */}
          <Button
            IconComponent={ForumOutlined}
            onClick={() => dispatch(ToggleContactModal(true))}
            theme="callToActionBlack"
            containerStyle={{ padding: "5px 10px" }}
          >
            Say Hello
          </Button>
        </Flex>
      </Flex>
      <Hamburger />
    </Flex>
  );
};
