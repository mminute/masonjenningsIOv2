import React, { Fragment } from 'react';
import ProjectEntry from './Project';

function P({ children, styles }) {
  return (
    <p className="inconsolata gray textHeight-regular" style={{ fontSize: '12px', ...styles }}>
      {children}
    </p>

  );
}

export function MasonJenningsIO() {
  const myWebsiteDescription = (
    <Fragment>
      <P styles={{ marginTop: '0px' }}>
        <a href="http://proveitapp.herokuapp.com/" target="_blank">MASONJENNINGS.IO</a> THIS WEBSITE!
      </P>

      <P>
        + I ORIGINALLY WROTE THIS WEBSITE DURING MY TIME AT THE FLATIRON SCHOOL USING RAW HTML/CSS AND <a href="https://wrapbootstrap.com/theme/semantic-minimal-portfolio-template-WB043X6GJ" target="_blank">THIS BOOTSTRAP THEME</a>.<br />
        + EVENTUALLY I REALIZED THAT IT WAS TEDIOUS TO MANUALLY EDIT THE SITE CONTENT SO I WROTE A RUDIMENTARY <a href="https://github.com/mminute/masonjennings.io/tree/master/generator">TEMPLATING SCRIPT</a>.<br />
        + AS A COVID LOCKDOWN PROJECT I <a href="https://github.com/mminute/masonjenningsIOv2">REBUILT THIS SITE</a> USING <a href="https://www.gatsbyjs.com/">Gatsby</a> TO MAKE UPDATING IT EVEN EASIER AND TO ADD SOME FUN INTERACTIVE CONTENT (WIP)!
      </P>
    </Fragment>
  );
  
  return (
    <ProjectEntry
      fileName="00-eniac.jpg"
      description={myWebsiteDescription}
      url="http://www.masonjennings.io/"
    />
  );
}

export function ProveIt() {
  const proveItDescription = (
    <Fragment>
      <P styles={{ marginTop: '0px' }}>
        <a href="http://proveitapp.herokuapp.com/" target="_blank">Prove It</a> (TWO-WEEK SPRINT) - A RAILS APP THAT ENABLES USERS TO CHALLENGE THEIR FRIENDS TO COMPETITIONS OF THEIR OWN CREATION.
      </P>

      <P>
        + LOGIN USING 'Devise' AUGMENTED WITH 'OmniAuth' FOR FACEBOOK INTEGRATION.<br />
        + RAILS ACTION MAILER IMPLEMENTED TO INFOR USERS OF KEY EVENTS.<br />
        + DYNAMIC VISUALIZATION OF USER STATISTICS USING `Chart.js`.<br />
        + IMPLEMENTED AJAX FOR SEAMLESS USER INTERFACE.<br />
        + DESIGNED AND IMPLEMENTED 'Capybara' BEHAVIOURALS TESTS.<br />
      </P>
    </Fragment>
  );
  
  return (
    <ProjectEntry
      fileName="ProveIt_.png"
      description={proveItDescription}
      url="http://proveitapp.herokuapp.com/"
    />
  );
}

export function LumenSEE() {
  const lumenSeeDescription = (
    <Fragment>
      <P styles={{ marginTop: '0px' }}>
        <a href="http://lumensee.herokuapp.com/" target="_blank">LumenSEE</a> (ONE-WEEK SPRINT) - A RAILS APP THAT DISPLAYS TO A USER THE STARS VISIBLE IN THE NIGHT SKY GIVEN THEIR LOCATION AND THE LIGHT POLLUTION IN THEIR AREA.
      </P>
      <P>
        + UTILIZED THE 'Hack the Universe - Star API' FOR STAR LOCATION AND APPARENT LUMINOSITY DATA AND THE US NATIONAL RENEWABLE ENERGY LABORATORY (NREL) API FOR LIGHT POLLUTION DATA.<br />
        + EMPLOYED 'Highchart.js' FOR 3D VISUALIZATION OF STAR LOCATION AND LUMINOSITY.<br />
        + IMPLEMENTED HTML5 FOR GEOLOCATION API TO ACQUIRE A USERS' LOCATION BASED ON THEIR IP ADDRESS.<br />
      </P>
    </Fragment>
  );

  return (
    <ProjectEntry
      fileName="Lumensee_.png"
      description={lumenSeeDescription}
      url="http://lumensee.herokuapp.com/"
    />
  );
}
