import React from 'react';
import Link from './Link';
import Inconsolata from './Fonts/Inconsolata/Inconsolata';
import { Box } from 'gestalt';

function Footer() {
  return (
    <footer style={{ color: '#666', backgroundColor: '#f5f5f5' }}>
      <Inconsolata>
        <Box display="flex" justifyContent="center" paddingY={6}>
          © {new Date().getFullYear()}
          &nbsp;
          <Link gatsbyLink font="inconsolata" to="/" txt="MASON JENNINGS" />,
          ALL RIGHTS RESERVED
        </Box>
      </Inconsolata>
    </footer>
  );
}

export default Footer;
