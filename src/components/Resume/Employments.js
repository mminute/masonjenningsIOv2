import React from 'react';
import { Box } from 'gestalt';

function Employment({ bizName, children, location, roles, url }) {
  return (
    <Box width={400} marginEnd={8} marginBottom={8}>
      <div className="inconsolata gray textSize-regular">
        <Box marginBottom={5}>
          <Box marginBottom={3}>
            <div style={{ fontWeight: 700 }}>
              <a href={url} target="_blank">{bizName}</a>
            </div>
          </Box>

          <Box>
            {location}
          </Box>
        </Box>

        <Box>
          {roles.map((role) => (
            <Box key={role.title} marginBottom={4}>
              {role.title}<br />
              {role.dates}
            </Box>
          ))}
        </Box>

        <div>
          {children}
        </div>
      </div>
    </Box>
  );
}

export function Pinterest() {
  return (
    <Employment
      bizName="PINTEREST"
      location="SAN FRANCISCO, CA"
      url="https://newsroom.pinterest.com/en/company"
      roles={[
        { title: 'SOFTWARE ENGINEER', dates: '02/2017 - PRESENT' },
        { title: 'APPRENTICE SOFTWARE ENGINEERING', dates: '04/2016 - 02/2017' }
      ]}
    >
      <Box>
        <Box marginBottom={6}>
          <Box marginBottom={2}>
            TEAMS:
          </Box>

          <ul>
            <li>CORE PRODUCT: SHOPPING (07/2020 - PRESENT)</li>
            <li>CP: LEGO (11/2019 - 07/2020)</li>
            <li>CP: Core UI WEB (02/2018 - 11/2019)</li>
            <li>CP: CORE PALTFORM WEB (02/2018 - 11/2019)</li>
            <li>WEB CORE EXPERIENCE (04/2016 - 06-2017)</li>
          </ul>
        </Box>

        <Box marginBottom={2}>
          RESPONSIBILITIES & ACCOMPLISHMENTS
        </Box>
        <ul>
          <li>FRONT-END ENGINEER DEVELOPING CORE USER FLOWS AND SHOPPING PRODUCTS</li>
          <li>ENSURED CONSISTENT REPRESENTATION OF CREATOR/ADVERTISER CONTENT</li>
          <li>MIGRATED PYTHON/DJANGO APP TO REACT</li>
          <li>REDUCED PASSWORD RESET HELP REQUESTS BY 25%</li>
        </ul>
      </Box>
    </Employment>
  );
}

export function AlphaSights() {
  return (
    <Employment
      bizName="ALPHASIGHTS INC"
      location="NEW YORK, NY"
      url="https://www.alphasights.com/"
      roles={[{ title: 'SOFTWARE ENGINEERING APPRENTICE', dates: '10/2015 - 03/2016' }]}
    >
      <ul>
        <li>MAINTAINED LEGACY RAILS APP WITH 177,780 LINES OF CODE.</li>
        <li>IMPLEMENTED ANALYTICS BACK-END IN SUPPORT OF TRACKING TWILIO CALLS AND CALL QUALITY.</li>
        <li>BUILT METRICS AGGREGATION, REPORTING TOOLING, AND DASHBOARDS</li>
      </ul>
    </Employment>
  );
}

export function RamlaBenaisa() {
  return (
    <Employment
      bizName="RAMLA BENAISSA ARCHITECTS"
      location="PHILADELPHIA, PA"
      url="https://ramla-benaissa.com/"
      roles={[{ title: 'INTERN ARCHITECT', dates: '8/2013 - 5/2015' }]}
    >
      <ul>
        <li>IMPLEMENTED PRODUCTS/CONSTRUCTION MATERIALS DATABASE USING MS ACCESS AND VISUAL BASIC.</li>
        <li>PRODUCED CONSTRUCTION AND DESIGN DOCUMENTATION USING 3D MODELLING SOFTWARE SUCH AS REVIT, AUTOCAD, SKETCHUP, RHINO, SOLIDWORKS, AND 3DSMAX.</li>
        <li>ENSURED COMPLIANCE WITH MUNICIPAL, STATE, AND NATIONAL BUILDING AND FIRE CODES AS WELL AS AMERICANS WITH DISABILITIES ACT.</li>
        <li>MANAGED COORDINATION BETWEEN MECHANICAL, ELECTRICAL, STRUCTURAL, AND CIVIL CONSULTING ENGINEER TEAMS AND TRADES.</li>
      </ul>
    </Employment>
  );
}