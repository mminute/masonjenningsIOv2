import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/navLinks"

function Science() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Science" />
      <h1>Science page</h1>
    </Layout>
  );
}

export default Science;
