import React from 'react';
import { Box } from 'gestalt';
import {
  LumenSEE, MasonJenningsIO, MinuteInventory, ProveIt,
} from './ProjectData';

export default function Projects() {
  return (
    <section>
      <Box display="flex" justifyContent="center">
        <h1 className="montserrat" style={{ display: 'block', fontSize: '30px' }}>
          PROJECTS
        </h1>
      </Box>

      <Box column={6} margin="auto">
        <div className="inconsolata gray textHeight-regular" style={{ fontSize: '12px', textAlign: 'center' }}>
          A sampling of my work thus far.
          {' '}
          A collection of applications built to test my skillset,
          {' '}
          challenge me to learn new aspects of code, and build something useful.
          {' '}
          Maybe even something cool.
        </div>
      </Box>

      <Box paddingX={12} marginTop={10}>
        <Box>
          <h2 className="montserrat gray" style={{ fontSize: '18px' }}>LATEST PROJECTS</h2>
        </Box>

        <MinuteInventory />
        <MasonJenningsIO />
      </Box>

      <Box paddingX={12} marginTop={8}>
        <Box>
          <h2 className="montserrat gray" style={{ fontSize: '18px' }}>FLATIRON PROJECTS</h2>
        </Box>

        <ProveIt />
        <LumenSEE />
      </Box>
    </section>
  );
}
