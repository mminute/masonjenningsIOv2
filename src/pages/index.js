import React, { useEffect, useRef } from 'react';
import About from '../components/Home/About';
import EniacHeroModule from '../components/Home/EniacHeroModule';
import Languages from '../components/Home/Languages';
import PlaceAndContact from '../components/Home/PlaceAndContact';
import Bootcamp from '../components/Home/Bootcamp';
import Layout from '../components/Layout/Layout';
import navLinks from '../components/DATA/navLinks';
import SEO from '../components/seo';

function IndexPage() {
  const parallaxRef = useRef();
  const contentRef = useRef();

  function handleScroll() {
    // https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
    // "I found that setState'ing inside scroll event for animation is choppy. I had to manually set the style of components using refs. – Ryan Rho May 13 '15 at 21:38"
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = `translate3d(0px, ${
        window.scrollY * 0.55
      }px, 0px)`;

      parallaxRef.current.style.opacity = (parallaxRef.current.clientHeight - window.scrollY)
        / parallaxRef.current.clientHeight;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    contentRef.current.style.marginTop = `${parallaxRef.current.clientHeight}px`;
  });

  useEffect(() => () => {
    window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerLinks = [
    { to: '#about-me', txt: 'About Me' },
    { to: '#my-languages', txt: 'Languages' },
    { to: '#my-projects', txt: 'Projects' },
    navLinks.resume,
    navLinks.contact,
  ];

  return (
    <Layout headerLinks={headerLinks}>
      <SEO title="Home" />
      <div
        ref={parallaxRef}
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <EniacHeroModule />
      </div>
      <div ref={contentRef} className="container">
        <About paddingTop={parallaxRef.current?.clientHeight / 6} />
      </div>

      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <hr className="section-divider" />
      </div>

      <div className="container">
        <Languages />
      </div>

      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <hr className="section-divider" />
      </div>

      <Bootcamp />

      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <hr className="section-divider" />
      </div>

      <div className="container">
        <PlaceAndContact />
      </div>
    </Layout>
  );
}

export default IndexPage;
