import React from 'react';
import Layout from './Layout/Layout';
import SEO from './seo';
import navLinks from '../DATA/navLinks';
import { Box } from 'gestalt';

export default function MoreAboutLayout({ children, excludeAboutMe, title, subTitle }) {
  const headerLinks = [navLinks.contact, navLinks.home];
  if (!excludeAboutMe) {
    headerLinks.unshift(navLinks.moreAboutMe);
  }
  
  return (
    <Layout headerLinks={headerLinks} stickyHeader>
      <SEO title={title} />

      <div className="container" style={{ marginBottom: '96px' }}>
        <Box marginTop={12}>
          <Box marginBottom={12}>
            <h1 className="montserrat" style={{ fontSize: '30px' }}>{title}</h1>
            {subTitle}
          </Box>

          {children}
        </Box>
      </div>
    </Layout>
  );
}
