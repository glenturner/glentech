import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from './Components/Flex';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing } from './Assets';
import { ContactModal } from './Components/Modals/ContactModal';
import { SuccessAlert } from './Components/Alerts';
import { MobileDrawer } from './Components/MobileDrawer';
import { Header } from './Components/Header';
import { Testimonials } from './Components/Testimonials';
import { ProjectsSection } from './Components/ProjectsSection';
import { SkillsSection } from './Components/SkillsSection';
import { Footer } from './Components/Footer';
import { ReusableStaticImage } from './Components/ReusableStaticImage';
import { Bio } from './Components/Bio';
import { WindowSizes } from './Redux/Models/Utility/WIndowSizes';
import { UPDATE_WINDOW_SIZE } from './Redux/Constants';
import { LandingSection } from './Components/LandingSection';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const appSize = useSelector((s) => s.utility.appWindowSize)

  const updateWindowSize = (size) => dispatch({ type: UPDATE_WINDOW_SIZE, size })

  const resizeListener = () => {
    if (window.innerWidth <= 450 && appSize !== WindowSizes.tinyMobile)
      updateWindowSize(WindowSizes.tinyMobile);
    else if (window.innerWidth <= 650 && appSize !== WindowSizes.smallMobile)
      updateWindowSize(WindowSizes.smallMobile);
    else if (window.innerWidth <= 875 && appSize !== WindowSizes.mobile)
      updateWindowSize(WindowSizes.mobile);
    else if (window.innerWidth <= 1000 && appSize !== WindowSizes.smallTablet)
      updateWindowSize(WindowSizes.smallTablet);
    else if (window.innerWidth <= 1200 && appSize !== WindowSizes.tablet)
      updateWindowSize(WindowSizes.tablet);
    else if (window.innerWidth <= 1399 && appSize !== WindowSizes.small)
      updateWindowSize(WindowSizes.small);
    else if (window.innerWidth <= 1550 && appSize !== WindowSizes.regular)
      updateWindowSize(WindowSizes.regular);
    else if (window.innerWidth > 1550 && appSize !== WindowSizes.large)
      updateWindowSize(WindowSizes.large);
  }

  const landingImageSize = useMemo(() => {
    switch (appSize) {
      case WindowSizes.mobile: return 29
      case WindowSizes.smallMobile: return 24
      case WindowSizes.tinyMobile: return 18
      default: return 40
    }
  }, [appSize])

  useEffect(() => {
    resizeListener();
    window.onresize = resizeListener;
  }, [])

  const Content = useCallback(() => {
    return (
      <Flex center column style={{ overflow: 'hidden' }}>
        <Header />
        <LandingSection />
        <ReusableStaticImage image={Landing} width={landingImageSize} />
        <Bio />
        <SkillsSection />
        <ProjectsSection />
        <Testimonials />
        <Footer />
        <MobileDrawer />
        <ContactModal />
        <SuccessAlert />
      </Flex>
    )
  }, [])


  return (
    <Router>
      <Route exact path="/" component={Content} />
    </Router>
  );
}

export default App;
