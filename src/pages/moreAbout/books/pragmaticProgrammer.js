import React from "react"
import Layout from "../../../components/Layout/Layout"
import SEO from "../../../components/seo"
import navLinks from "../../../components/navLinks"

function PragmaticProgrammer() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Pragmatic Programmer Notes" />
      <h1>Pragmatic Programmer Notes page</h1>
    </Layout>
  );
}

export default PragmaticProgrammer;
