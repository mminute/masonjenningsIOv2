import React from 'react';
import Layout from '../../../components/Layout/Layout';
import SEO from '../../../components/seo';
import navLinks from '../../../DATA/navLinks';

function BooksToRead() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Books To Read" />
      <h1>Books To Read page</h1>
    </Layout>
  );
}

export default BooksToRead;
