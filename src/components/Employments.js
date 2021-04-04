import React from 'react';
import { Box } from 'gestalt';

function UL({ children }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {children}
    </ul>
  );
}

function LI({ children }) {
  return (
    <li>
      + {children}
    </li>
  );
}

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

          <UL>
            <LI>CORE PRODUCT: NATIVE PUBLISHING - ANDROID (03/2021 - PRESENT)</LI>
            <LI>CORE PRODUCT: SHOPPING - WEB (07/2020 - 03/2021)</LI>
            <LI>CP: LEGO (11/2019 - 07/2020)</LI>
            <LI>CP: Core UI WEB (02/2018 - 11/2019)</LI>
            <LI>CP: CORE PALTFORM WEB (02/2018 - 11/2019)</LI>
            <LI>WEB CORE EXPERIENCE (04/2016 - 06-2017)</LI>
          </UL>
        </Box>

        <Box marginBottom={2}>
          RESPONSIBILITIES & ACCOMPLISHMENTS
        </Box>
        <UL>
          {/* TODO: ADD NATIVE PUBLISHING HERE */}
          <LI>FRONT-END ENGINEER DEVELOPING CORE USER FLOWS AND SHOPPING PRODUCTS</LI>
          <LI>ENSURED CONSISTENT REPRESENTATION OF CREATOR/ADVERTISER CONTENT</LI>
          <LI>MIGRATED PYTHON/DJANGO APP TO REACT</LI>
          <LI>REDUCED PASSWORD RESET HELP REQUESTS BY 25%</LI>
        </UL>
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
      <UL>
        <LI>MAINTAINED LEGACY RAILS APP WITH 177,780 LINES OF CODE.</LI>
        <LI>IMPLEMENTED ANALYTICS BACK-END IN SUPPORT OF TRACKING TWILIO CALLS AND CALL QUALITY.</LI>
        <LI>BUILT METRICS AGGREGATION, REPORTING TOOLING, AND DASHBOARDS</LI>
      </UL>
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
      <UL>
        <LI>IMPLEMENTED PRODUCTS/CONSTRUCTION MATERIALS DATABASE USING MS ACCESS AND VISUAL BASIC.</LI>
        <LI>PRODUCED CONSTRUCTION AND DESIGN DOCUMENTATION USING 3D MODELLING SOFTWARE SUCH AS REVIT, AUTOCAD, SKETCHUP, RHINO, SOLIDWORKS, AND 3DSMAX.</LI>
        <LI>ENSURED COMPLIANCE WITH MUNICIPAL, STATE, AND NATIONAL BUILDING AND FIRE CODES AS WELL AS AMERICANS WITH DISABILITIES ACT.</LI>
        <LI>MANAGED COORDINATION BETWEEN MECHANICAL, ELECTRICAL, STRUCTURAL, AND CIVIL CONSULTING ENGINEER TEAMS AND TRADES.</LI>
      </UL>
    </Employment>
  );
}