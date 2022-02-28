import React, { useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  Stack,
  TapArea,
} from 'gestalt';
import './Header.css';
import PropTypes from 'prop-types';
import Link from '../Link';

// mobileHeader is display: none above 950px window width
export default function MobileHeader({ headerLinks }) {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  return (
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
          <Link
            to="/"
            style={{ textDecoration: 'none', color: '#111' }}
            gatsbyLink
          >
            Mason Jennings
          </Link>
        </Box>
        <IconButton
          accessibilityLabel="Page navigation"
          icon="menu"
          onClick={() => setShowMobileLinks((current) => !current)}
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
              {headerLinks.map((linkInfo) => (
                <Box paddingY={2} paddingX={4} key={linkInfo.to}>
                  <TapArea onTap={() => setShowMobileLinks(false)}>
                    <Link
                      key={`mobile-nav-link-${linkInfo.to}`}
                      to={linkInfo.to}
                      txt={linkInfo.txt}
                      gatsbyLink={linkInfo.gatsbyLink}
                    />
                  </TapArea>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      )}
    </div>
  );
}

MobileHeader.propTypes = {
  headerLinks: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string, txt: PropTypes.string }),
  ).isRequired,
};
