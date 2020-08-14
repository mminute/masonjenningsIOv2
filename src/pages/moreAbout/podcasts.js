import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/navLinks"

function Podcasts() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Podcasts" />
      <h1>Podcasts page</h1>
    </Layout>
  );
}

export default Podcasts;
