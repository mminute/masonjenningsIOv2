import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/DATA/navLinks"

function Articles() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Articles" />
      <h1>Articles page</h1>
    </Layout>
  );
}

export default Articles;
