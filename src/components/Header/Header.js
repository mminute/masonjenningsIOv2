import React, { useEffect, useState, useRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { Box, Row } from 'gestalt';
import Link from '../Link';
import styles from '../styles';
import 'gestalt/dist/gestalt.css';
import './Header.css';

function Header({ headerLinks, siteTitle, stickyHeader }) {
  const [opacity, setOpacity] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(() => () => {
    window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (headerRef.current && !stickyHeader) {
      const headerMultiplier = 1.25;
      const newOpacity = 1
        - (headerMultiplier * headerRef.current.clientHeight - window.scrollY)
          / (headerMultiplier * headerRef.current.clientHeight);
      setOpacity(newOpacity);
      setScrolled(window.scrollY > headerRef.current.clientHeight);
    }
  }

  const linkStyles = opacity && !stickyHeader < 0.75
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
        paddingBottom: '4px', paddingLeft: '4px', paddingRight: '4px', ...linkStyles,
      }}
      to={linkInfo.to}
      txt={linkInfo.txt}
    />
  ));

  return (
    <header
      className={`${stickyHeader ? 'stickyHeader' : 'fixedHeader'}`}
      style={{
        ...(scrolled || stickyHeader ? { boxShadow: '0px 1px 0px 0px #f5f5f5' } : {}),
        backgroundColor: `rgba(255, 255, 255, ${stickyHeader ? '100' : opacity})`,
      }}
      ref={headerRef}
    >
      <Box display="flex" alignItems="baseline" paddingX={12}>
        <h1 style={{
          fontSize: '28px',
          paddingBottom: '4px',
          paddingLeft: '4px',
          paddingRight: '4px',
          ...linkStyles
        }}>
          <GatsbyLink
            to="/"
            style={{ textDecoration: 'none', color: styles.fontColor, ...linkStyles }}
          >
            <div
              className="montserrat"
              styles={{
                paddingBottom: '4px',
                paddingLeft: '4px',
                paddingRight: '4px',
                ...linkStyles,
              }}
            >
              {siteTitle}
            </div>
          </GatsbyLink>
        </h1>
        <Box display="flex" direction="row" flex="grow" justifyContent="end">
          <Row gap={2}>{links}</Row>
        </Box>
      </Box>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;