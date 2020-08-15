import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/DATA/navLinks"

function SocialJustice() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Social Justice" />
      <h1>Social Justice page</h1>
    </Layout>
  );
}

export default SocialJustice;
