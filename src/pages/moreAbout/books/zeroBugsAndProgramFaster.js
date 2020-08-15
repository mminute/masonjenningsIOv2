import React from "react"
import Layout from "../../../components/Layout/Layout"
import SEO from "../../../components/seo"
import navLinks from "../../../components/DATA/navLinks"

function ZeroBugsAndProgramFaster() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Zero Bugs Notes" />
      <h1>Zero Bugs Notes page</h1>
    </Layout>
  );
}

export default ZeroBugsAndProgramFaster;
