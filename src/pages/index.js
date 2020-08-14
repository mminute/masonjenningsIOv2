import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import navLinks from "../components/navLinks"

//     'moreAboutMe.html': [contact, home],
//     'podcasts.html': [contact, home, moreAboutMe],
//     'resume.html': [contact, home],
//     'thanks.html': [home],
// }

function IndexPage() {
  const headerLinks = [
    { to: "#about-me", txt: "About Me" },
    { to: "#my-languages", txt: "Languages" },
    { to: "#my-projects", txt: "Projects" },
    navLinks.resume,
    navLinks.contact,
  ];

  return (
    <Layout headerLinks={headerLinks}>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
