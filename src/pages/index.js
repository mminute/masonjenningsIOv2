import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../components/DATA/navLinks';
import EniacHeroModule from '../components/Home/EniacHeroModule';
import Image from '../components/image';

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
      <div ref={contentRef}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        {' '}
        <br />
        <Link to="/using-typescript/">Go to Using TypeScript</Link>
      </div>
    </Layout>
  );
}

export default IndexPage;

/* <section class="module-hero module-parallax module-fade module-full-height bg-dark-30" data-background="assets/images/00-eniac.jpg">
<span class="container top-caption-down">
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <h1 class="module-title font-alt align-center">
                <span class="black-background" style="padding-left: 2px">&#60;/code&#62;</span>
            </h1>
            <div class="module-subtitle font-inc align-center black-background padded-y-2">
                Web developer minted in NYC at //Flatiron School.  Making sweet, sweet code.
            </div>
        </div>
    </div>
</span>
</section > */
