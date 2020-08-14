import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

function Header({ headerLinks, siteTitle }) {
  const links = headerLinks.map((linkInfo, idx) => (
    // TODO: Style link
    <Link key={idx} to={linkInfo.to}>{linkInfo.txt}</Link>
  ));

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        {links}
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
