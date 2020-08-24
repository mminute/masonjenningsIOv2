import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/seo';
import navLinks from '../../components/DATA/navLinks';

function Me() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="More about me" />
      <h1>More about me page</h1>
    </Layout>
  );
}

export default Me;
