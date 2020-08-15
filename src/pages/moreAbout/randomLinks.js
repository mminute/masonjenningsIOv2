import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/DATA/navLinks"

function RandomLinks() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Random Links" />
      <h1>Random Links page</h1>
    </Layout>
  );
}

export default RandomLinks;
