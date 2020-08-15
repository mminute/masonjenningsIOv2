import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/DATA/navLinks"

function TechnicalResources() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Technical Resource" />
      <h1>Technical Resource page</h1>
    </Layout>
  );
}

export default TechnicalResources;
