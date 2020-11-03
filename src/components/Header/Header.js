import React, { useEffect, useState, useRef } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import Link from '../Link';
import './Header.css';

function Header({ headerLinks, stickyHeader }) {
  const [opacity, setOpacity] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(
    () => () => {
      window.removeEventListener('scroll', handleScroll);
    },
    []
  );

  function handleScroll() {
    if (headerRef.current && !stickyHeader) {
      const headerMultiplier = 1.25;
      const newOpacity =
        1 -
        (headerMultiplier * headerRef.current.clientHeight - window.scrollY) /
          (headerMultiplier * headerRef.current.clientHeight);
      setOpacity(newOpacity);
      setScrolled(window.scrollY > headerRef.current.clientHeight);
    }
  }

  const linkStyles =
    !stickyHeader && opacity < 0.75
      ? {
          backgroundColor: 'black',
          color: 'white',
        }
      : {};

  const links = headerLinks.map((linkInfo, idx) => (
    <Link
      key={idx}
      gatsbyLink={linkInfo.gatsbyLink}
      styleOverrides={{
        paddingBottom: '4px',
        paddingLeft: '4px',
        paddingRight: '4px',
        ...linkStyles,
      }}
      to={linkInfo.to}
      txt={linkInfo.txt}
    />
  ));

  return (
    <header
      className={`${stickyHeader ? 'stickyHeader' : 'fixedHeader'} montserrat`}
      style={{
        ...(scrolled || stickyHeader
          ? { boxShadow: '0px 1px 0px 0px #f5f5f5' }
          : {}),
        backgroundColor: `rgba(255, 255, 255, ${
          stickyHeader ? '100' : opacity
        })`,
      }}
      ref={headerRef}
    >
      <DesktopHeader links={links} linkStyles={linkStyles} />

      <MobileHeader headerLinks={headerLinks} />
    </header>
  );
}

export default Header;
