import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import navLinks from "../components/navLinks"

function Contact() {
  return (
    <Layout headerLinks={[navLinks.home]}>
      <SEO title="Contact" />
      <h1>Contact page</h1>
    </Layout>
  );
}

export default Contact;
