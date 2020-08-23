import { Link } from 'gatsby';
import React from 'react';
import Inconsolata from './Fonts/Inconsolata/Inconsolata';
import Montserrat from './Fonts/Montserrat/Montserrat';
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

const fontsMap = {
  montserrat: Montserrat,
  inconsolata: Inconsolata,
};

function LinkComponent({ font, gatsbyLink, styleOverrides, to, txt }) {
  const makeFn = gatsbyLink ? makeGatsbyLink : makeLink;
  const Font = fontsMap[font] || fontsMap.montserrat;

  return <Font>{makeFn({ to, txt, styleOverrides })}</Font>;
}

export default LinkComponent;
