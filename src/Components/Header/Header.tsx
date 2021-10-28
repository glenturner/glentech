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
import { Landing } from "../../Assets";

export const Header = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLarge, setIsLarge] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const landing = document.querySelector('#landing');
  const about = document.querySelector('#about');
  const projects = document.querySelector('#projects');
  const project_cards = document.querySelector('#project_cards');
  const testimonials = document.querySelector('#testimonials');
  const author = document.querySelector('#author');

  const isInViewport = (el: any) => {
    const rect = el?.getBoundingClientRect();
    return (
      rect && rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  document.addEventListener('scroll', () => {
    const landingView = isInViewport(landing),
      aboutView = isInViewport(about),
      projectView = isInViewport(projects),
      projectCardsView = isInViewport(project_cards),
      testimonialsView = isInViewport(testimonials),
      authorView = isInViewport(author)

    if (landingView) {
      return setSelectedRoute('#landing')
    }
    if (aboutView) {
      return setSelectedRoute('#about')
    }
    if (projectView || projectCardsView) {
      return setSelectedRoute('#projects')
    }
    if (testimonialsView || authorView) {
      return setSelectedRoute('#testimonials')
    }

  }, {
    passive: true
  });



  useEffect(() => {
    setSelectedRoute("#landing")
    //@ts-ignore
    const unlisten = history.listen((location: any, action: any) => {
      // If there's a hash in the url then don't manage the scroll
      if (!location.hash) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
      setSelectedRoute(location.hash)
    });
    return () => { unlisten() }
  }, [history])

  // document.addEventListener('scroll', () => {
  //   const landingView = isInViewport(landing),
  //     aboutView = isInViewport(about),
  //     projectView = isInViewport(projects),
  //     projectCardsView = isInViewport(project_cards),
  //     testimonialsView = isInViewport(testimonials),
  //     authorView = isInViewport(author)

  //   if (landingView) {
  //     return setSelectedRoute('#landing')
  //   }
  //   if (aboutView) {
  //     return setSelectedRoute('#about')
  //   }
  //   if (projectView || projectCardsView) {
  //     return setSelectedRoute('#projects')
  //   }
  //   if (testimonialsView || authorView) {
  //     return setSelectedRoute('#testimonials')
  //   }

  // }, {
  //   passive: true
  // });


  return (
    <Flex id="app-header" row className={style.wrapper} align="center" justify="space-between">
      <Logo />
      <Flex justify="flex-end" style={{ alignSelf: isLarge ? 'flex-start' : 'center', flex: 1 }}>
        <Flex className={style.navSection} align="center" style={{
          transition: '200ms',
          padding: '20px', marginLeft: 80, alignSelf: 'center'
        }}>
          <Flex style={{ marginRight: '20px' }}>
            <NavLink route="#landing" text={"Landing"} selected={selectedRoute === '#landing'} />
            <NavLink route="#about" text={"About"} selected={selectedRoute === '#about'} />
            <NavLink route="#projects" text={"Projects"} selected={selectedRoute === '#projects'} />
            <NavLink route="#testimonials" text={"Testimonials"} selected={selectedRoute === '#testimonials'} />
          </Flex>

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
