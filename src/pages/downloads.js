import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'gestalt';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../DATA/navLinks';

function ListItem({ children, note, to }) {
  return (
    <li style={{ marginBottom: '8px' }}>
      <a href={to} download>
        {children}
      </a>
      {note && <span style={{ fontSize: '12px' }}>{` - ${note}`}</span>}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  note: PropTypes.string,
  to: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  note: '',
};

const NotFoundPage = () => (
  <Layout
    headerLinks={[navLinks.home, navLinks.moreAboutMe, navLinks.contact]}
    stickyHeader
    stickyFooter
  >
    <SEO title="Downloads" />
    <div className="container montserrat">
      <h1>Downloads!</h1>

      <Box paddingY={6}>
        <h3>Minute Inventory</h3>

        <p>Version 1.0.0</p>
        <ul>
          <li>
            Mac
            <ul>
              <ListItem to="/MinuteInventory-1.0.0.dmg" note="(This is probably the one that you want)">
                MinuteInventory-1.0.0.dmg
              </ListItem>

              <ListItem to="/MinuteInventory-1.0.0-mac.zip">
                MinuteInventory-1.0.0-mac.zip
              </ListItem>

              <ListItem to="/MinuteInventory-1.0.0-arm64.dmg">
                MinuteInventory-1.0.0-arm64.dmg
              </ListItem>

              <ListItem to="/MinuteInventory-1.0.0-arm64-mac.zip">
                MinuteInventory-1.0.0-arm64-mac.zip
              </ListItem>
            </ul>
          </li>
        </ul>
      </Box>
    </div>
  </Layout>
);

export default NotFoundPage;
