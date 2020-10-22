import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../DATA/navLinks';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import { Box } from 'gestalt';

const textStyles = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
};

function Thanks() {
  let height = 0;
  if (typeof window !== 'undefined') {
    height = window.innerHeight;
  }

  return (
    <Layout headerLinks={[navLinks.home]}>
      <SEO title="Thanks" />
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "00-eniac.jpg" }) {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={(data) => {
          const imageData = data.desktop.childImageSharp.fluid;
          return (
            <BackgroundImage
              preserveStackingContext
              backgroundColor="#040e18"
              fluid={imageData}
              Tag="section"
              style={{
                height: `${height}px`,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <Box display="flex" height="100%" width="100%">
                <Box margin="auto">
                  <Box
                    color="darkGray"
                    marginBottom={3}
                    dangerouslySetInlineStyle={{
                      __style: {
                        margin: 'auto',
                        marginBottom: '12px',
                        width: 'min-content',
                      },
                    }}
                  >
                    <div
                      className="montserrat"
                      style={{
                        ...textStyles,
                        fontSize: '30px',
                        paddingRight: '6px',
                        paddingLeft: '6px',
                      }}
                    >
                      {'</THANKS!>'}
                    </div>
                  </Box>

                  <Box
                    color="darkGray"
                    dangerouslySetInlineStyle={{ __style: { padding: '6px' } }}
                  >
                    <div
                      className="montserrat"
                      style={{
                        ...textStyles,
                        marginBottom: '6px'
                      }}>
                      I'LL GET BACK TO YOU JUST AS SOON AS I CAN.
                    </div>
                  </Box>
                </Box>
              </Box>
            </BackgroundImage>
          );
        }}
      />
    </Layout>
  );
}

export default Thanks;
