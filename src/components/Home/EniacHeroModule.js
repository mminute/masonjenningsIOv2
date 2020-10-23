import React from 'react';
import { Box } from 'gestalt';
import './EniacHero.css';

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
  return (
    <div
      className="eniacHeroBackground"
      style={{
        height: `100%`,
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
    </div>
  );
}

export default EniacHeroModule;
