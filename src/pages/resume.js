import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../DATA/navLinks';
import { AlphaSights, Pinterest, RamlaBenaisa } from '../components/Employments';
import { Box } from 'gestalt';

function Section({ children, title }) {
  return (
    <Box marginTop={6}>
      <div className="montserrat gray" style={{ fontSize: '24px' }}>
        {title}
      </div>

      <Box paddingX={6}>
        <div className="montserrat gray" style={{ fontSize: '12px' }}>
          {children}
        </div>
      </Box>
    </Box>
  );
}

function Education({ dates, name, programName, url }) {
  return (
    <div className="inconsolata textSize-regular textHeight-regular">
      <Box marginBottom={3}>
        {name}, {dates}<br />
        <a href={url}>{programName}</a>
      </Box>
    </div>
  );
}

function Resume() {
  // TODO: Add a download link for a pdf of my resume?
  return (
    <Layout
      headerLinks={[navLinks.contact, navLinks.home]}
      stickyHeader
    >
      <SEO title="Resume" />
      <div className="container">
        <Section title="EMPLOYMENT">
          <Box display="flex" marginTop={4} wrap>
            <Pinterest />
            <AlphaSights />
            <RamlaBenaisa />
          </Box>
        </Section>

        <Section title="EDUCATION">
          <Box paddingY={4}>
            <Box marginBottom={6}>
              <Education
                dates="6/2015 - 8/2015"
                name="THE FLATIRON SCHOOL"
                programName="WEB IMMERSIVE"
                url="https://flatironschool.com/career-courses/coding-bootcamp"
              />
            </Box>

            <Education
              dates="2007"
              name="UNIVERSITY OF PENNSYLVANIA"
              programName="B.A. - ARCHITECTURE"
              url="https://architecture.sas.upenn.edu/"
            />
          </Box>
        </Section>
      </div>
    </Layout>
  );
}

export default Resume;
