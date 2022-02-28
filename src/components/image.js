import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

// https://criscodes.hashnode.dev/how-to-render-multiple-images-in-gatsby-using-image-component-cjxoowlou000pfms1o91x71ts

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(props.fileName));

      if (!image) {
        return null;
      }

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={props.alt} fluid={imageFluid} style={props.style} />;
    }}
  />
);

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({ maxHeight: PropTypes.string, maxWidth: PropTypes.string }),
};

Image.defaultProps = { style: {} };

export default Image;
