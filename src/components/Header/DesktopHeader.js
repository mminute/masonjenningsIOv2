import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Row } from 'gestalt';
import './Header.css';


// desktopHeader is display: none below 950px window width
export default function DesktopHeader({ links, linkStyles }) {
  return (
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
  );
}
