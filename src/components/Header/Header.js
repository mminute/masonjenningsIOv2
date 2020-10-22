import React, { useEffect, useState, useRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { Box, Divider, IconButton, Row, Stack, TapArea } from 'gestalt';
import Link from '../Link';
import 'gestalt/dist/gestalt.css';
import './Header.css';

function Header({ headerLinks, stickyHeader }) {
  const [opacity, setOpacity] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileLinks, setShowMobileLinks] = useState(false);
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
      {/* desktopHeader is display: none below 950px window width */}
      <div className="desktopHeader">
        <Box display="flex" alignItems="baseline" paddingX={12}>
          <h1
            style={{
              fontSize: '28px',
              paddingBottom: '4px',
              paddingLeft: '4px',
              paddingRight: '4px',
              ...linkStyles,
            }}
          >
            <GatsbyLink
              to="/"
              style={{ textDecoration: 'none', color: '#111', ...linkStyles }}
            >
              <div
                styles={{
                  paddingBottom: '4px',
                  paddingLeft: '4px',
                  paddingRight: '4px',
                  ...linkStyles,
                }}
              >
                Mason Jennings
              </div>
            </GatsbyLink>
          </h1>
          <Box display="flex" direction="row" flex="grow" justifyContent="end">
            <Row gap={2}>{links}</Row>
          </Box>
        </Box>
      </div>

      {/* mobileHeader is display: none above 950px window width */}
      <div className="mobileHeader">
        <Box
          alignItems="baseline"
          color="white"
          display="flex"
          justifyContent="between"
          width="100%"
          paddingY={1}
        >
          <Box marginStart={4}>
            <GatsbyLink
              to="/"
              style={{ textDecoration: 'none', color: '#111' }}
            >
              Mason Jennings
            </GatsbyLink>
          </Box>
          <IconButton
            accessibilityLabel="Page navigation"
            icon="menu"
            onClick={() => setShowMobileLinks(current => !current)}
          />
        </Box>

        {showMobileLinks && (
          <Box
            color="white"
            direction="column"
            display="flex"
            width="100%"
          >
            <Divider />
            <Box marginBottom={2}>
              <Stack alignItems="end">
                {headerLinks.map((linkInfo, idx) => (
                  <Box paddingY={2} paddingX={4}>
                    <TapArea onTap={() => setShowMobileLinks(false)}>
                      <Link
                        key={`mobile-nav-link-${idx}`}
                        gatsbyLink={linkInfo.gatsbyLink}
                        to={linkInfo.to}
                        txt={linkInfo.txt}
                      />
                    </TapArea>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        )}
      </div>
    </header>
  );
}

export default Header;
