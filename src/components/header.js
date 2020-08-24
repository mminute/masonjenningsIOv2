import React, { useEffect, useState, useRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { Box, Row } from 'gestalt';
import Link from './Link';
import styles from './styles';
import Montserrat from './Fonts/Montserrat/Montserrat';
import 'gestalt/dist/gestalt.css';

function Header({ headerLinks, siteTitle }) {
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
    if (headerRef.current) {
      const headerMultiplier = 1.25;
      const newOpacity = 1
        - (headerMultiplier * headerRef.current.clientHeight - window.scrollY)
          / (headerMultiplier * headerRef.current.clientHeight);
      setOpacity(newOpacity);
      setScrolled(window.scrollY > headerRef.current.clientHeight);
    }
  }

  const linkStyles = opacity < 0.75
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
      style={{
        ...(scrolled ? { boxShadow: '0px 1px 0px 0px #f5f5f5' } : {}),
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      }}
      ref={headerRef}
    >
      <Box display="flex" alignItems="baseline" paddingX={12}>
        <h1 style={{ fontSize: '28px' }}>
          <GatsbyLink
            to="/"
            style={{ textDecoration: 'none', color: styles.fontColor }}
          >
            <Montserrat
              styles={{
                paddingBottom: '4px',
                paddingLeft: '4px',
                paddingRight: '4px',
                ...linkStyles,
              }}
            >
              {siteTitle}
            </Montserrat>
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
