import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ProjectEntry from './Project';

function P({ children, styles, useDiv }) {
  const classes = 'inconsolata gray textHeight-regular';
  const allStyles = { fontSize: '12px', ...styles };
  return useDiv ? (
    <div className={classes} style={allStyles}>
      {children}
    </div>
  ) : (
    <p className={classes} style={allStyles}>
      {children}
    </p>

  );
}

P.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({ marginTop: PropTypes.string }),
  useDiv: PropTypes.bool,
};
P.defaultProps = { styles: {}, useDiv: false };

export function MinuteInventory() {
  const [showMore, setShowMore] = useState(false);

  const minuteInventoryDescription = (
    <>
      <P styles={{ marginTop: '0px' }}>
        MinuteInventory
        <br />
        <Link to="/downloads">Download it here!</Link>
      </P>

      <P>
        + Inventory manager built with Electron
        <br />
        + Create, view, edit, archive, and delete entries
        <br />
        + Save as CSV
        <br />
        <button
          className="inconsolata gray textHeight-regular"
          style={{
            border: 'none', backgroundColor: 'transparent', margin: 0, textDecoration: 'underline',
          }}
          type="button"
          onClick={() => setShowMore((prevShowMore) => !prevShowMore)}
        >
          {showMore ? 'less' : 'more'}
        </button>
      </P>

      {showMore && (
        <>
          <P useDiv>
            + Over the last few years I`ve learned that two thing I enjoy are:
            <ol style={{ listStyle: 'none', marginTop: '0px' }}>
              <li>
                + Making lists! See my lists of:
                <ul style={{ listStyle: 'none' }}>
                  <li>
                    +
                    {' '}
                    <Link to="/moreAbout/media/podcasts">podcasts</Link>
                  </li>

                  <li>
                    +
                    {' '}
                    <Link to="/moreAbout/media/books/read">books I`ve read</Link>
                  </li>

                  <li>
                    +
                    {' '}
                    <Link to="/moreAbout/media/books/toRead">books I`d like to read</Link>
                  </li>

                  <li>
                    +
                    {' '}
                    <Link to="/moreAbout/media/tv">TV I`ve watched</Link>
                  </li>
                </ul>
              </li>

              <li>
                + Building tools to make lists (like my
                {' '}
                <a href="https://github.com/mminute/BooksReadScript" target="blank">command line tool</a>
                {' '}
                for managing lists of books I`ve read and books I`d like to read)
              </li>
            </ol>
            + So when I decided to try out
            {' '}
            <a href="https://www.electronjs.org/" target="blank">Electron</a>
            {' '}
            via
            {' '}
            <a href="https://github.com/electron-react-boilerplate/electron-react-boilerplate" target="blank">Electron React Boilerplate</a>
            {' '}
            I guess I naturally tended toward, well, a spreadsheet?
            {' '}
            More specifically I wanted:
            <ul style={{ listStyle: 'none', marginTop: '0px' }}>
              <li>
                + a nice UI to add, view, and search for items
              </li>
              <li>
                + portable! I hate when my data isn`t easy to export/import elsewhere
                {' '}
                so the app would have to use a standard file format: CSV`s
              </li>
              <li>
                + integratable(?). I wanted to be able to easily add functionality like
                {' '}
                automatically fetching links to
                {' '}
                <a href="https://www.goodreads.com/" target="blank">Goodreads</a>
                {' '}
                when I add a book or to connect to other api`s as I discover new use cases.
              </li>
            </ul>
          </P>

          <P useDiv>
            + Overall I really liked building in Electron!
            {' '}
            It requires you to develop two discrete processes, `main` and `renderer`.
            <ul style={{ listStyle: 'none', marginTop: '0px' }}>
              <li>
                + `main` runs
                {' '}
                <a href="https://nodejs.org/" target="blank">Node</a>
                {' '}
                to interact with your operating system and to create Chromium BrowserWindows.
              </li>

              <li>
                + Each BrowserWindow uses the `renderer` to generate its contents.
                {' '}
                I used
                {' '}
                <a href="https://reactjs.org/" target="blank">React</a>
                {' '}
                to generate the contents of the browser window but
                {' '}
                you can any JS UI framework you like!
                {' '}
                There are even a number of
                {' '}
                <a href="https://github.com/sindresorhus/awesome-electron#boilerplates" target="blank">boilerplates</a>
                {' '}
                to get you started with your framework of choice.
              </li>

              <li>
                + There is a hard divide between the `main` and the `renderer` processes.
                {' '}
                The two processes may only communicate to each other by emitting and listening for
                {' '}
                events using inter-process communication (IPC).
                {' '}
                You can emit an event from the `renderer` like:
                {' '}
                `Hey main!
                {' '}
                Can you show the user the open file dialog then open whatever file they select?`
                {' '}
                The main process handles all the operating system interaction,
                {' '}
                like reading in the content of a .txt file, and can then
                {' '}
                <i>reply</i>
                {' '}
                to the event with the contents of that file.
                {' '}
                The renderer will then receive this response and
                {' '}
                can handle the data however you so choose.
                {' '}
                Similarly, the `main` process can emit events to the renderer to let the
                {' '}
                renderer know that something has happened and
                {' '}
                provide relevant data regarding these changes.
              </li>

              <li>
                +
                {' '}
                <a href="https://www.electronjs.org/docs/latest/tutorial/process-model" target="blank">source</a>
              </li>
            </ul>
          </P>
        </>
      )}
    </>
  );

  return (
    <ProjectEntry
      altText="Minute Inventory"
      fileName="MinuteInventoryLogo.png"
      description={minuteInventoryDescription}
      url="https://github.com/mminute/mminuteInventory"
      imageStyle={{ maxHeight: '80px', maxWidth: '80px', margin: 'auto' }}
    />
  );
}

export function MasonJenningsIO() {
  const myWebsiteDescription = (
    <>
      <P styles={{ marginTop: '0px' }}>
        MASONJENNINGS.IO - THIS WEBSITE!
      </P>

      <P>
        + I ORIGINALLY WROTE THIS WEBSITE DURING MY TIME AT THE FLATIRON SCHOOL
        USING RAW HTML/CSS AND
        {' '}
        <a href="https://wrapbootstrap.com/theme/semantic-minimal-portfolio-template-WB043X6GJ" target="_blank" rel="noreferrer">THIS BOOTSTRAP THEME</a>
        .
        <br />
        + EVENTUALLY I REALIZED THAT IT WAS TEDIOUS TO MANUALLY EDIT
        THE SITE CONTENT SO I WROTE A RUDIMENTARY
        {' '}
        <a href="https://github.com/mminute/masonjennings.io/tree/master/generator">TEMPLATING SCRIPT</a>
        .
        <br />
        + AS A COVID LOCKDOWN PROJECT I
        {' '}
        <a href="https://github.com/mminute/masonjenningsIOv2">REBUILT THIS SITE</a>
        {' '}
        USING
        {' '}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
        {' '}
        TO MAKE UPDATING IT EVEN EASIER AND TO ADD SOME FUN INTERACTIVE CONTENT (WIP)!
      </P>
    </>
  );

  return (
    <ProjectEntry
      altText="This website"
      fileName="00-eniac.jpg"
      description={myWebsiteDescription}
      url="http://www.masonjennings.io/"
    />
  );
}

export function ProveIt() {
  const proveItDescription = (
    <>
      <P styles={{ marginTop: '0px' }}>
        <a href="http://proveitapp.herokuapp.com/" target="_blank" rel="noreferrer">Prove It</a>
        (TWO-WEEK SPRINT) - A RAILS APP THAT ENABLES USERS
        {' '}
        TO CHALLENGE THEIR FRIENDS TO COMPETITIONS OF THEIR OWN CREATION.
      </P>

      <P>
        + LOGIN USING `Devise` AUGMENTED WITH `OmniAuth` FOR FACEBOOK INTEGRATION.
        <br />
        + RAILS ACTION MAILER IMPLEMENTED TO INFOR USERS OF KEY EVENTS.
        <br />
        + DYNAMIC VISUALIZATION OF USER STATISTICS USING `Chart.js`.
        <br />
        + IMPLEMENTED AJAX FOR SEAMLESS USER INTERFACE.
        <br />
        + DESIGNED AND IMPLEMENTED `Capybara` BEHAVIOURALS TESTS.
        <br />
      </P>
    </>
  );

  return (
    <ProjectEntry
      altText="Prove it app"
      fileName="ProveIt_.png"
      description={proveItDescription}
      url="http://proveitapp.herokuapp.com/"
    />
  );
}

export function LumenSEE() {
  const lumenSeeDescription = (
    <>
      <P styles={{ marginTop: '0px' }}>
        <a href="http://lumensee.herokuapp.com/" target="_blank" rel="noreferrer">LumenSEE</a>
        {' '}
        (ONE-WEEK SPRINT) - A RAILS APP THAT DISPLAYS TO A USER THE STARS VISIBLE
        {' '}
        IN THE NIGHT SKY GIVEN THEIR LOCATION AND THE LIGHT POLLUTION IN THEIR AREA.
      </P>
      <P>
        + UTILIZED THE `Hack the Universe - Star API` FOR STAR LOCATION AND APPARENT LUMINOSITY
        {' '}
        DATA AND THE US NATIONAL RENEWABLE ENERGY LABORATORY (NREL) API FOR LIGHT POLLUTION DATA.
        <br />
        + EMPLOYED `Highchart.js` FOR 3D VISUALIZATION OF STAR LOCATION AND LUMINOSITY.
        <br />
        + IMPLEMENTED HTML5 FOR GEOLOCATION API TO ACQUIRE A USERS` LOCATION
        {' '}
        BASED ON THEIR IP ADDRESS.
        <br />
      </P>
    </>
  );

  return (
    <ProjectEntry
      altText="Lumensee app"
      fileName="Lumensee_.png"
      description={lumenSeeDescription}
      url="http://lumensee.herokuapp.com/"
    />
  );
}
