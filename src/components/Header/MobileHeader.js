import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Divider, IconButton, Stack, TapArea } from 'gestalt';
import './Header.css';


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
  );
}
