import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../components/DATA/navLinks';

function Resume() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Resume" />
      <h1>Resume page</h1>
    </Layout>
  );
}

export default Resume;
