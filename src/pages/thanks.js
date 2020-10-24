import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../DATA/navLinks';
import { Box } from 'gestalt';
import '../components/Home/EniacHero.css';

const textStyles = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
};

class Thanks extends Component {
  state = { height: null };

  componentDidMount() {
    this.setState({ height: window.innerHeight });
  }

  render() {
    const { height } = this.state;

    const moreAboutMe = {
      to: '/moreAbout/me/',
      txt: 'About Me',
      gatsbyLink: true,
    }

    return (
      <Layout headerLinks={[moreAboutMe, navLinks.resume, navLinks.home]}>
        <SEO title="Thanks" />
        <div
          className="eniacHeroBackground"
          style={{
            height: height ? `${height}px` : '100%',
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
        </div>
      </Layout>
    );
  }
}

export default Thanks;
