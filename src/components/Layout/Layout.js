/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header/Header';
import Footer from '../Footer';
import './Layout.css';

const Layout = ({ children, headerLinks, stickyHeader, stickyFooter }) => {
  const contentRef = useRef();
  const footerRef = useRef();
  const [fixedFooter, setFixedFooter] = useState(false);

  useEffect(() => {
    if (stickyFooter && contentRef.current && footerRef.current) {
      const contentHeight = contentRef.current.offsetParent.clientHeight;
      if (window.innerHeight > contentHeight + footerRef.current.clientHeight) {
        setFixedFooter(true);
      }
    }
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        headerLinks={headerLinks}
        siteTitle={data.site.siteMetadata.title}
        stickyHeader={stickyHeader}
      />
      <main ref={contentRef}>{children}</main>

      <div
        ref={footerRef}
        style={fixedFooter ? { position: 'fixed', bottom: 0, left: 0, width: '100%' } : {}}
      >
        <Footer />
      </div>
    </>
  );
};

export default Layout;
