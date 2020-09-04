import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'gestalt';

export default function PlaceAndContact() {
  return (
    <div style={{ marginBottom: '100px' }}>
      <Box display="flex" margin="auto" justifyContent="center">
        <Box display="flex" column={8} justifyContent="center">
          <Box
            display="flex"
            direction="column"
            column={6}
            justifyContent="center"
          >
            <div
              className="icon-map-pin icon-large gray"
              style={{ margin: 'auto' }}
            />
            <div
              className="inconsolata textSize-regular"
              style={{ paddingTop: '12px', textAlign: 'center' }}
            >
              SAN FRANCISCO, CA, USA
            </div>
          </Box>

          <Box display="flex" column={8} justifyContent="center">
            <Link
              to="/contact"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                className="icon-envelope icon-large gray"
                style={{ margin: 'auto' }}
              />
              <div
                className="inconsolata textSize-regular"
                style={{ paddingTop: '12px', textAlign: 'center' }}
              >
                CONTACT ME
              </div>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
