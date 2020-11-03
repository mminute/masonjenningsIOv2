// This is a fork of <MoreAboutLayout /> and <Layout /> in order
// to get a bit more control without impacting the existing pages
import React, { useRef, useEffect, useState } from 'react';
import DesktopHeader from '../Header/DesktopHeader';
import MobileHeader from '../Header/MobileHeader';
import Footer from '../Footer';
import SEO from '../seo';
import Link from '../Link';
import navLinks from '../../DATA/navLinks';
import { Box } from 'gestalt';

export default function TvLayout({ children }) {
  const headerRef = useRef();
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    setStickyTop(headerRef.current.clientHeight)
  }, [headerRef.current])

  const headerLinks = [navLinks.moreAboutMe, navLinks.contact, navLinks.home];

  const links = headerLinks.map((linkInfo, idx) => (
    <Link
      key={idx}
      gatsbyLink={linkInfo.gatsbyLink}
      styleOverrides={{
        paddingBottom: '4px',
        paddingLeft: '4px',
        paddingRight: '4px',
      }}
      to={linkInfo.to}
      txt={linkInfo.txt}
    />
  ));

  return (
    <>
      <header
        ref={headerRef}
        className="montserrat"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 100)',
          boxShadow: '0px 1px 0px 0px #f5f5f5',
          position: 'fixed',
          top: '0px',
          width: '100%',
          zIndex: 1,
        }}
      >
        <DesktopHeader links={links} linkStyles={{}} />

        <MobileHeader headerLinks={headerLinks} />
      </header>

      <main>
        <SEO title="TV I've watched" />

        <div className="container" style={{ marginBottom: '96px', marginTop: 48 + stickyTop }}>
          <Box marginTop={12}>
            <Box marginBottom={12}>
              <h1 className="montserrat" style={{ fontSize: '30px' }}>
                TV I've watched
              </h1>
            </Box>

            {children({ stickyTop })}
          </Box>
        </div>
      </main>

      <Footer />
    </>
  );
}
