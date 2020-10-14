import React, { useRef, useEffect, useState } from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import { Box, Column } from 'gestalt';
import CountTo from 'react-count-to';

// https://github.com/Noitidart/react-countTo/blob/gh-pages/dist/react-countto.js
// https://github.com/MicheleBertoli/react-count-to/blob/master/src/react-count-to.js

function LabeledCountTo({ label, suffix, to }) {
  return (
    <Column span={3}>
      <Box display="flex" direction="column" justifyContent="center">
        <CountTo to={to} speed={1750}>
          {val => (
            <div
              className="montserrat"
              style={{ color: 'white', fontSize: '36px', margin: 'auto' }}
            >
              {val}
              {suffix}
            </div>
          )}
        </CountTo>
        <div
          className="inconsolata textSize-regular"
          style={{
            color: 'white',
            margin: 'auto',
            paddingTop: '12px',
          }}
        >
          {label}
        </div>
      </Box>
    </Column>
  );
}

export default function Bootcamp() {
  const counterRef = useRef();
  const [showCounters, setShowCounters] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(
    () => () => {
      window.removeEventListener('scroll', handleScroll);
    },
    []
  );

  function handleScroll() {
    if (counterRef.current) {
      const boundingRect = counterRef.current.getBoundingClientRect();

      const triggeringHt = boundingRect.top + boundingRect.height * 0.25;
      if (triggeringHt <= window.innerHeight) {
        setShowCounters(true);
      }
    }
  }

  return (
    <section>
      <Box display="flex" justifyContent="center" column={6} margin="auto">
        <Box display="flex" justifyContent="center">
          <h1
            className="montserrat"
            style={{ display: 'block', fontSize: '25px' }}
          >
            PROUD BOOTCAMP HERITAGE
          </h1>
        </Box>
      </Box>

      <Box marginTop={8}>
        <StaticQuery
          query={graphql`
            query {
              desktop: file(relativePath: { eq: "SublimeTextProveIt.png" }) {
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => {
            const imageData = data.desktop.childImageSharp.fluid;
            return (
              <BackgroundImage
                preserveStackingContext
                backgroundColor="#040e18"
                fluid={imageData}
                Tag="section"
                style={{ background: 'rgba(0, 0, 0, .5)', height: '50vh' }}
              >
                <Box
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                  ref={counterRef}
                  data-test-id="thing"
                >
                  <h2
                    className="montserrat"
                    style={{
                      color: 'white',
                      display: 'flex',
                      fontSize: '30px',
                      justifyContent: 'center',
                    }}
                  >
                    THE FLATIRON WAY
                  </h2>
                  <Box column={10} paddingY={12}>
                    {showCounters && (
                      <Box display="flex" width="100%">
                        <LabeledCountTo to={3} label="MONTHS" />
                        <LabeledCountTo to={166} label="REPOS" />
                        <LabeledCountTo to={318} label="COMMITS" />
                        <LabeledCountTo to={999} label="IMPROVED" suffix="%" />
                      </Box>
                    )}
                  </Box>
                </Box>
              </BackgroundImage>
            );
          }}
        />
      </Box>
    </section>
  );
}
