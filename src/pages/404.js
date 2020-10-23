import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../DATA/navLinks';

const NotFoundPage = () => (
  <Layout headerLinks={[navLinks.contact, navLinks.home]} stickyHeader stickyFooter>
    <SEO title="404: Not found" />
    <div className="container montserrat">
      <h1>Whoops!</h1>
      <p>You've just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
);

export default NotFoundPage;
