import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { AppLogo } from '../../Assets';
import DelayUnmount from '../DelayUnmount';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { AppState } from '../../Redux/Models';
import { Flex } from '../Flex';
import { useHistory } from 'react-router-dom';
import { ToggleContactModal, ToggleMobileNavigation } from '../../Redux/Actions';
import { ForumOutlined, NavigateNext } from '@material-ui/icons';
import { Hamburger } from '../Hamburger';
import { Button } from '../Button';

const Option = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  let option = null;
  let icon: any = null;

  const onMouseLeave = () => gsap.to(icon, { x: 0, duration: 0.1 })
  const onMouseEnter = () => gsap.to(icon, { x: 10, duration: 0.1 })

  const onClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(ToggleMobileNavigation(false));
    setTimeout(() => history.push(props.location.hash), 300)
  }

  useEffect(() => {
    setSelectedRoute(history.location.pathname)
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

  return (
    <Link className={style.option} smooth to={props.route}>{props.label}<NavigateNext ref={e => icon = e} className={style.linkIcon} /></Link>
  )
}


const MobileDrawerComponent = DelayUnmount((props: any) => {

  const dispatch = useDispatch();
  let topNav: any = null;
  let listener: any = null;

  useEffect(() => {
    gsap.set(".top-nav-secondary", { opacity: 0, display: 'flex' })
    gsap.to("#background-overlay", { opacity: 1.0, duration: 0.3 });
    gsap.from(".top-nav-secondary", { x: window.innerWidth, opacity: 0, duration: 0.3 });
    gsap.to(".top-nav-secondary", { x: window.innerWidth - topNav.innerWidth, opacity: 1.0, delay: 0.1, duration: 0.3 });
    // return window.removeEventListener(listener, () => { });
  }, [])

  useEffect(() => {
    if (!props.status) {
      gsap.set("#background-overlay", { opacity: 1.0, display: 'flex' })
      gsap.to("#background-overlay", { opacity: 0, duration: 0.4 });
      gsap.to(".top-nav-secondary", { x: window.innerWidth, opacity: 0, display: 'none', duration: 0.4 });
    }
  }, [props.status])


  return (
    <Flex id="background-overlay" onClick={() => dispatch(ToggleMobileNavigation(false))} className={style.backgroundOverlay}>
      <div ref={e => topNav = e} className={`${style.topNavSecondary} top-nav-secondary`}>
        <Flex column style={{ width: '100%' }}>
          <Flex row align="center" justify="space-between" style={{ width: '100%', boxSizing: 'border-box', padding: '20px 0px', paddingLeft: 20 }}>
            <img
              draggable="false"
              style={{ height: 80, width: 'auto' }}
              alt="Eagle Harbor Logo"
              src={AppLogo} />
            <Hamburger />
          </Flex>
          <div className={style.scrollable}>
            <div className={style.flexWrapper}>
              <ul className={style.optionsList}>
                <Option route="#about" label='ABOUT' />
                <Option route="#projects" label='PROJECTS' />
                <Option route="#testimonials" label='TESTIMONIALS' />
              </ul>
              <Flex center column style={{ width: '100%', marginTop: 40 }}>
                <Button
                  IconComponent={ForumOutlined}
                  onClick={() => dispatch(ToggleContactModal(true))}
                  theme="callToActionBlack"
                  containerStyle={{ marginLeft: 20, padding: "5px 10px" }}
                >
                  Start a Conversation
                </Button>
              </Flex>
            </div>
          </div>
        </Flex>
      </div>
    </Flex>
  )
})

export const MobileDrawer = () => {
  const isOpen = useSelector((s: AppState) => s.utility.mobileNavOpen);
  return <MobileDrawerComponent status={isOpen} delayTime={750} />
}
