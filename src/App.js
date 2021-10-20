import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Flex } from './Components/Flex';
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from './Assets';
import { ContactModal } from './Components/Modals/ContactModal';
import { SuccessAlert } from './Components/Alerts';
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

  useEffect(() => {
    resizeListener();
    window.onresize = resizeListener;
  }, [])


  return (
    <Router>
      <Flex center column>
        <Header />
        <LandingSection />
        <ReusableStaticImage image={Landing} width={40} />
        <Bio />
        <SkillsSection />
        <ProjectsSection />
        <Testimonials />
        <Footer />
        <ContactModal />
        <SuccessAlert />
      </Flex>
    </Router>
  );
}

export default App;
