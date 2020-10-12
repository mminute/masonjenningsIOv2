import React from 'react';
import Layout from './Layout/Layout';
import SEO from './seo';
import navLinks from '../DATA/navLinks';
import { Box } from 'gestalt';

export default function MoreAboutLayout({ children, title }) {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]} stickyHeader>
      <SEO title={title} />

      <div className="container" style={{ marginBottom: '96px' }}>
        <Box marginTop={12}>
          <Box marginBottom={12}>
            <h1 className="montserrat" style={{ fontSize: '30px' }}>{title}</h1>
          </Box>

          {children}
        </Box>
      </div>
    </Layout>
  );
}
