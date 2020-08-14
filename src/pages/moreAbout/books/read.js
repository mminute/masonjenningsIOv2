import React from "react"
import Layout from "../../../components/Layout/Layout"
import SEO from "../../../components/seo"
import navLinks from "../../../components/navLinks"

function BooksRead() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Books I've Read" />
      <h1>Books I've Read page</h1>
    </Layout>
  );
}

export default BooksRead;
