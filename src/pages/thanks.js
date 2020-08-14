import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import navLinks from "../components/navLinks"

function Thanks() {
  return (
    <Layout headerLinks={[navLinks.home]}>
      <SEO title="Thanks" />
      <h1>Thanks page</h1>
    </Layout>
  );
}

export default Thanks;
