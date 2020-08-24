import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/seo';
import navLinks from '../../components/DATA/navLinks';

function Makers() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Makers" />
      <h1>Makers page</h1>
    </Layout>
  );
}

export default Makers;
