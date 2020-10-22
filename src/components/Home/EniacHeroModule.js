import React, { useEffect } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import { Box } from 'gestalt';

function Montserrat({ children, styles }) {
  const defaultStyles = { letterSpacing: '0.15em' };

  return (
    <div className="montserrat" style={{ ...defaultStyles, ...(styles || {}) }}>
      {children}
    </div>
  );
}

const textStyles = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
};

function EniacHeroModule() {
  let height = 0;
  if (typeof window !== 'undefined') {
    height = window.innerHeight;
  }

  return (
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
                  <Montserrat
                    styles={{
                      ...textStyles,
                      fontSize: '30px',
                    }}
                  >
                    {'</CODE>'}
                  </Montserrat>
                </Box>

                <Box
                  color="darkGray"
                  dangerouslySetInlineStyle={{ __style: { padding: '6px' } }}
                >
                  <Montserrat styles={{ ...textStyles, marginBottom: '6px' }}>
                    Software developer @ Pinterest
                  </Montserrat>

                  <Montserrat styles={{ ...textStyles, marginBottom: '6px' }}>
                    Minted in NYC @ //Flatiron School
                  </Montserrat>

                  <Montserrat styles={{ ...textStyles, marginBottom: '6px' }}>
                    Making sweet, sweet code
                  </Montserrat>
                </Box>
              </Box>
            </Box>
          </BackgroundImage>
        );
      }}
    />
  );
}

export default EniacHeroModule;
