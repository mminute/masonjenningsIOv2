import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import navLinks from "../../components/navLinks"

function InterestingPeople() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Interesting People" />
      <h1>Interesting People page</h1>
    </Layout>
  );
}

export default InterestingPeople;
