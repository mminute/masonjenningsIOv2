import { Link } from 'gatsby';
import React from 'react';
import styles from './styles';

const linkStyles = {
  textDecoration: 'none',
  fontSize: styles.fontSize,
  color: styles.fontColor,
};

function makeGatsbyLink({ to, txt, styleOverrides }) {
  return (
    <Link to={to} style={{ ...linkStyles, ...styleOverrides }}>
      {txt}
    </Link>
  );
}

function makeLink({ to, txt, styleOverrides }) {
  return (
    <a href={to} style={{ ...linkStyles, ...styleOverrides }}>
      {txt}
    </a>
  );
}

function LinkComponent({
  font, gatsbyLink, styleOverrides, to, txt,
}) {
  const makeFn = gatsbyLink ? makeGatsbyLink : makeLink;

  return <div className={font || 'montserrat'}>{makeFn({ to, txt, styleOverrides })}</div>;
}

export default LinkComponent;
