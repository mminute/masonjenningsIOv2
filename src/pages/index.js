import React, { useEffect, useRef, useState } from 'react';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects/Projects';
import EniacHeroModule from '../components/Home/EniacHeroModule';
import Languages from '../components/Home/Languages';
import PlaceAndContact from '../components/Home/PlaceAndContact';
import Bootcamp from '../components/Home/Bootcamp';
import Layout from '../components/Layout/Layout';
import navLinks from '../DATA/navLinks';
import SEO from '../components/seo';

function Divider() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <hr className="section-divider" />
    </div>
  );
}

function Section({ children }) {
  return (
    <>
      {children}
      <Divider />
    </>
  );
}

function IndexPage() {
  const parallaxRef = useRef();
  const contentRef = useRef();
  const [padding, setPadding] = useState(1000);

  useEffect(() => {
    setPadding(parallaxRef.current?.clientHeight / 6)
  }, [parallaxRef.current]);

  console.log(padding);

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

      <div id="about-me" />
      <Section>
        <div ref={contentRef} className="container">
          <About paddingTop={padding} />
        </div>
        {/*
          This looks weird but it keeps the header from obscuring the language
          content when you navigate to the id
        */}
        <div id="my-languages" />
      </Section>

      <Section>
        <div className="container">
          <Languages />
        </div>
      </Section>

      <Section>
        <Bootcamp />
        {/*
          This looks weird but it keeps the header from obscuring the Projects
          content when you navigate to the id
        */}
        <div id="my-projects" />
      </Section>

      <Section>
        <div className="container">
          <Projects />
        </div>
      </Section>

      <div className="container">
        <PlaceAndContact />
      </div>
    </Layout>
  );
}

export default IndexPage;
