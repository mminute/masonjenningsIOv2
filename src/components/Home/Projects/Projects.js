import React from 'react';
import { LumenSEE, MasonJenningsIO, ProveIt } from './ProjectData';
import { Box } from 'gestalt';

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
          A sampling of my work thus far.  A collection of applications built to test my skillset, challenge me to learn new aspects of code, and build something useful.  Maybe even something cool.
        </div>
      </Box>

      <Box paddingX={12} marginTop={10}>
        <Box>
          <h2 className="montserrat gray" style={{ fontSize: '18px' }}>LATEST PROJECTS</h2>
        </Box>

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

// <section class="module">
//     <div class="container">
//         <div class="row">
//             <div class="col-sm-6 col-sm-offset-3">
//                 <h2 class="module-title align-center font-alt">Projects</h2>
//                 <div class="module-subtitle align-center font-inc">
//                     My work thus far.  A collection of web-apps built to test my skillset, challenge me to learn new aspects of code, and build something useful.  Maybe even something cool. 
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div class="container">
//         <div class="row">
//             <div class="col-md-3 col-sm-offset-1">
//                 <h4 class="font-alt align-center">
//                     Flatiron Projects
//                 </h4>
//             </div>
//         </div>
//     </div>
//     <br>
//     <div class="container">


// </section>
