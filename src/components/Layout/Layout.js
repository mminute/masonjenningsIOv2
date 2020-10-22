import React, { useEffect, useRef, useState } from 'react';
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

  return (
    <>
      <Header
        headerLinks={headerLinks}
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
