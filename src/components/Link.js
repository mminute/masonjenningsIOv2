import { Link } from 'gatsby';
import React from 'react';

const linkStyles = {
  textDecoration: 'none',
  fontSize: '16px',
  color: '#111',
};

function makeGatsbyLink({ to, txt, styleOverrides }) {
  return (
    <Link to={to} style={{ ...linkStyles, ...styleOverrides }}>
      {txt}
    </Link>
  );
}

// Only the first navigation to an id was working
// This hack forces the window to scroll to the id
const scrollTo = id => {
  if (id.match(/^#/)) {
    const el = document.querySelector(id);

    if (el) {
      return window.scrollTo(0, el.offsetTop - 20);
    }
  }
};

function makeLink({ to, txt, styleOverrides }) {
  return (
    <a
      href={to}
      style={{ ...linkStyles, ...styleOverrides }}
      onClick={() => scrollTo(to)}
    >
      {txt}
    </a>
  );
}

function LinkComponent({ font, gatsbyLink, styleOverrides, to, txt }) {
  const makeFn = gatsbyLink ? makeGatsbyLink : makeLink;

  return (
    <div className={font || 'montserrat'}>
      {makeFn({ to, txt, styleOverrides })}
    </div>
  );
}

export default LinkComponent;
