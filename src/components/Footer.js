import React from 'react';
import { Box } from 'gestalt';
import Link from './Link';

function Footer() {
  return (
    <footer style={{ color: '#666', backgroundColor: '#f5f5f5' }}>
      <div className="inconsolata">
        <Box display="flex" justifyContent="center" paddingY={6}>
          ©
          {' '}
          {new Date().getFullYear()}
          &nbsp;
          <Link gatsbyLink font="inconsolata" to="/" txt="MASON JENNINGS" />
          ,
          ALL RIGHTS RESERVED
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
