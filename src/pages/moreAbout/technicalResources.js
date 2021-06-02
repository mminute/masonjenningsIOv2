import React from 'react';
import MoreAboutLayout from '../../components/MoreAboutLayout';
import Itm from '../../components/Itm';
import { Link } from 'gatsby';
import { Box } from 'gestalt';

function Section({ children, title }) {
  return (
    <section>
      <h2 className="montserrat" style={{ fontSize: '18px' }}>{title}</h2>

      <div className="inconsolata gray textHeight-regular">
        {children}
      </div>
    </section>
  );
}

function TechnicalResources() {
  return (
    <MoreAboutLayout title="Technical Resources">
      <Box marginStart={12}>
        <div className="inconsolata gray textHeight-regular" style={{ fontSize: '18px' }}>
          A loosely organized collection of technical resources I've used or found vaguely interesting
        </div>

        <Section title="Editors">
          <ul>
            <Itm style={{ marginBottom: '12px' }}>
              Current editor: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a><br />
              Current theme: Trying out <a href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode" target="_blank">SynthWave '84</a> with the `glow` enabled. Previously Monokai
            </Itm>

            <Itm>
              Used to/sometimes use <a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a><br />
              With Monokai SL Theme
            </Itm>
          </ul>
        </Section>

        <Section title="AWS">
          <ul>
            <Itm>
              <a href="https://egghead.io/courses/building-serverless-web-applications-with-react-aws-amplify" target="_blank">
                Egghead.io: Building Serverless Web Applications with React & AWS Amplify
              </a>
            </Itm>
          </ul>
        </Section>

        <Section title={<a href="https://graphql.org/" target="_blank">GraphQL</a>}>
          <ul>
            <Itm>
                <a href="https://gqless.dev/" target="_blank">gqless</a> A GraphQL client without queries?
            </Itm>

            <Itm>
                <p>
                    <a href="https://academind.com/" target="_blank">
                        Academind
                    </a> has a pretty good Node/GraphQl/React

                    <a href="https://www.youtube.com/playlist?list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_" target="_blank">
                        tutorial series on youtube.
                    </a>
                </p>

                <p>
                    It walks you through building out a Node GraphQl API using <a href="https://expressjs.com/" target="_blank">express</a>,
                    <a href="https://github.com/graphql/express-graphql" target="_blank">express-graphql</a>,
                    a <a href="https://www.mongodb.com/cloud/atlas/" target="_blank">MongoDB database</a>,
                    and <a href="https://mongoosejs.com/" target="_blank">moongoosejs</a>.
                </p>

                <p>
                    It's a good example of implementing a GraphQl API but mostly it raised a bunch of questions as to how something like express-graphql works under the hood. 
                </p>
            </Itm>
          </ul>
        </Section>

        <Section title={<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>}>
          <ul>
            <Itm>TODO</Itm>
          </ul>
        </Section>

        <Section title="CSS">
          <ul>
              <Itm>
                <a href="https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/" target="_blank">The peculiar magic of flexbox and auto margins</a>
              </Itm>
          </ul>
        </Section>

        <Section title={<a href="https://redux.js.org/" target="_blank">Redux</a>}>
          <ul>
            <Itm>
              <a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts" target="_blank">Redux Essentials, Part 1: Redux Overview and Concepts</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Newsletters and Blogs">
          <ul>
            <Itm>
              <a href="https://boz.com/" target="_blank">Andrew Bosworth</a>- VP Facebook Reality Labs
            </Itm>
            <Itm>
              <a href="https://hardcoresoftware.learningbyshipping.com/" target="_blank">Hardcore Software: Inside the Rise and Fall of the PC Revolution</a>
            </Itm>
            <Itm>
              <a href="https://twitter.com/cassidoo/" target="_blank">Cassidy Williams <span className="icon-twitter"></span></a> writes <a href="https://cassidoo.co/newsletter/" target="_blank">rendezvous with cassidoo</a> about all things web development.
            </Itm>

            <Itm>
              <a href="https://maggieappleton.com/" target="_blank">Maggie Appleton</a> <a href="https://twitter.com/Mappletons" target="_blank"><span className="icon-twitter"></span></a> produces cool <a href="https://illustrated.dev/" target="_blank">sketchnotes</a> about web development and technology.
            </Itm>

            <Itm>
              <a href="https://twitter.com/slicknet/" target="_blank">Nicholas C. Zakas <span className="icon-twitter"></span></a> writes <a href="https://humanwhocodes.com/" target="_blank">Human who codes</a> about software engineering with a focus on JS.
            </Itm>

            <Itm>
              Not a newsletter but Nikita Voloboev's <a href="https://wiki.nikitavoloboev.xyz/" target="_blank">brain dump</a> looks interesting
            </Itm>
          </ul>
        </Section>

        <Section title="Quality">
          <ul>
            <Itm>
              Uber built a tool called <a href="https://eng.uber.com/piranha/" target="_blank">Piranha</a> to find and delete dead code
            </Itm>

            <Itm>
              Google has a <a href="https://developers.google.com/tech-writing" target="_blank">technical writing course</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Frameworks and Libraries">
          <ul>
            <Itm>
              <a href="" target="_blank">Mint</a> a programming language for writing single page applications- <a href="https://stackoverflow.blog/2021/03/29/mint-a-new-language-designed-for-building-single-page-applications/?utm_source=Iterable&utm_medium=email&utm_campaign=the_overflow_newsletter" target="_blank">StackOverflow article</a>
            </Itm>
            <Itm>
              <a href="https://www.fastify.io/" target="_blank">Fastify</a>- Like Express. Web framework for Node. Read about it <a href="https://pawelgrzybek.com/from-express-to-fastify-in-node-js/" target="_blank">here</a>
            </Itm>
            <Itm>
                <a href="https://proton-native.js.org/#/" target="_blank">Proton Native</a>- Create desktop applications through a React syntax, on all platforms. (like electron?)
            </Itm>
            <Itm>
                <a href="https://hyperapp.dev/" target="_blank">hyperapp</a> [<a href="https://github.com/jorgebucaran/hyperapp" target="_blank">github</a>]- small UI library
            </Itm>
            <Itm>
                <a href="https://nodered.org/" target="_blank">Node-RED</a>- a low-code visual programming tool<br/>
                <a href="https://www.youtube.com/watch?v=y-vlPdW5IoM&list=PLyspMSh4XhLP-mqulUMcaqTbLo-ZJxSX5&index=57&t=0s" target="_blank">Low Code for the Node.js Developer - Nick O Leary, IBM</a>
            </Itm>
            <Itm>
                <a href="https://www.bryanbraun.com/checkboxland/" target="_blank">Checkboxland: Render anything as HTML checkboxes</a>
            </Itm>
            <Itm>
                <a href="https://dev.to/jameesy/gatsby-vs-next-js-what-why-and-when-4al5" target="_blank">Gatsby vs Next.js</a>                                    
            </Itm>

            <Itm>
                <a href="https://nextjs.org/" target="_blank">Next.js</a> a React/Webpack/Babel based library for server side rendering
            </Itm>

            <Itm>
                <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> a static site generator tool
            </Itm>
          </ul>
        </Section>

        <Section title="UI">
          <ul>
            <Itm>
              <a href="https://bumbag.style/" target="_blank">Bumbag</a> build accessible & themeable React applications
            </Itm>
            <Itm>
              <a href="https://react-spectrum.adobe.com/index.html" target="_blank">React Spectrum</a> from Adobe "A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences."
            </Itm>
            <Itm>
              <a href="https://modalzmodalzmodalz.com/" target="_blank">We use too many damn modals</a>
            </Itm>
            <Itm>
              <a href="https://flaviocopes.com/styled-components/#:~:text=Styled%20Components%20are%20one%20of,other%20element%20in%20the%20page" target="_blank">Styled Components</a>
            </Itm>
            <Itm>
              <a href="http://motion-layout.azurewebsites.net/" target="_blank">Motion Layout</a> for hero animations
            </Itm>
            <Itm>
              <a href="https://evergreen.segment.com/" target="_blank">Evergreen</a> React UI Framework
            </Itm>
            <Itm>
              <a href="https://lottiefiles.com/" target="_blank">LottieFiles</a> some sort of animation file format?
            </Itm>

            <Itm>
              <a href="https://seek-oss.github.io/braid-design-system/" target="_blank">Braid Design System</a> a themeable design system
            </Itm>

            <Itm>
              <a href="https://developer.apple.com/documentation/swiftui/" target="_blank">SwiftUI</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Accessibility">
          <ul>
            <Itm>
              <a href="https://khan.github.io/tota11y/" target="_blank">tota11y</a> an accessibility visualization toolkit
            </Itm>
            <Itm>
              <a href="https://engineering.fb.com/web/facebook-com-accessibility/" target="_blank">Making Facebook.com accessible to as many people as possible</a>
            </Itm>
            <Itm>
              <a href="https://dev.to/erhannah/13-ways-to-level-up-your-site-s-accessibility-22c6" target="_blank">13 ways to level up your site's accessibility ✨</a>
            </Itm>
            <Itm>
              <a href="https://help.apple.com/voiceover/info/guide/10.8/English.lproj/index.html" target="_blank">Mac Voiceover Guide</a>
            </Itm>
            <Itm>
              <a href="https://engineering.fb.com/ios/under-the-hood-building-accessibility-tools-for-the-visually-impaired-on-facebook/" target="_blank">Under the hood: Building accessibility tools for the visually impaired on Facebook</a>
            </Itm>
            <Itm>
              <a href="https://accessibilityinsights.io/en/" target="_blank">Accessibility Insights</a> for testing accessibility
            </Itm>
          </ul>
        </Section>

        <Section title="Patterns">
          <ul>
            <Itm>
              <a href="https://en.wikipedia.org/wiki/Reactive_programming" target="_blank">Reactive Programming</a>
            </Itm>
            <Itm>
              <a href="https://en.wikipedia.org/wiki/Observer_pattern" target="_blank">Observer Pattern</a>
            </Itm>
            <Itm>
              <a href="https://rxjs.dev/guide/overview" target="_blank">RxJS</a>
            </Itm>
            <Itm>
              <a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754" target="_blank">The introduction to Reactive Programming you've been missing</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Assorted">
          <ul>
            <Itm>
              <a href="https://danluu.com/" target="_blank">danluu</a>
            </Itm>
            <Itm>
              <a href="https://sonniesedge.co.uk/posts/" target="_blank">sonniesedge block site</a>
            </Itm>
            <Itm>
              <a href="https://whatthefuck.is/" target="_blank">What the fuck is</a><br/>
              And <a href="https://whatthefork.is/" target="_blank">What the fork is</a> by <a href="https://twitter.com/dan_abramov" target="_blank">Dan Abramov</a>
            </Itm>
            <Itm>
              <a href="https://classicprogrammerpaintings.com/" target="_blank">Classic Programmer Paintings</a>
            </Itm>
            <Itm>
              <a href="https://12factor.net/" target="_blank">The Twelve Factor App</a>
            </Itm>
            <Itm>
              <a href="https://www.thoughtworks.com/radar" target="_blank">Thoughtworks Technology Radar</a>
            </Itm>
            <Itm>
              <a href="https://stackshare.io/stacks" target="_blank">StackShare</a> listst the technical stacks of many major companies
            </Itm>

            <Itm>
              <a href="https://slashdot.org/" target="_blank">Slashdot</a> for random tech news
            </Itm>

            <Itm>
              <a href="https://calmtech.com/index.html" target="_blank">Calm Tech</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Mentorship">
          <ul>
            <Itm>
              <a href="https://jvns.ca/blog/2020/07/14/when-your-coworker-does-great-work-tell-their-manager/" target="_blank">When your coworker does great work, tell their manager</a>
            </Itm>
            <Itm>
              <a href="https://www.fastcompany.com/40540798/eight-essential-rules-for-first-time-mentors" target="_blank">Eight Essential Rules For First-Time Mentors</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Articles">
          <ul>
            <Itm>
              <a href="https://thehosk.medium.com/software-development-is-a-losers-game-fc68bb30d7eb" target="blank">Software development is a loser’s game</a>
            </Itm>
            <Itm>
              <a href="https://en.wikipedia.org/wiki/XY_problem" target="_blank">XY Problem</a> is a communication problem encountered in help desk and similar situations in which the person asking for help obscures the real issue, X, because instead of asking directly about issue X, they ask how to solve a secondary issue, Y, which they believe will allow them to resolve issue X. However, resolving issue Y often does not resolve issue X, or is a poor way to resolve it, and the obscuring of the real issue and the introduction of the potentially strange secondary issue can lead to the person trying to help having unnecessary difficulties in communication and/or offering poor solutions.
            </Itm>
            <Itm>
              <a href="https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/" target="_blank">The Joel Test: 12 Steps to Better Code</a> (<a href="https://news.ycombinator.com/item?id=26707679" target="_blank">Hacker News thread</a>)
            </Itm>
            <Itm>
              <a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd#.givsms2q3" target="_blank">The Dao of Immutability</a> by <a href="https://twitter.com/_ericelliott" target="_blank">Eric Elliot</a>
            </Itm>
            <Itm>
              <a href="https://developers.google.com/web/updates/2015/12/getting-started-pwa" target="_blank">Getting Started with Progressive Web Apps</a>
            </Itm>
            <Itm>
              <a href="https://www.zdnet.com/article/from-earth-to-orbit-with-linux-and-spacex/" target="_blank">From Earth to orbit with Linux and SpaceX</a>
            </Itm>
            <Itm>
              <a href="https://mariosfakiolas.com/blog/become-a-better-godfather-for-your-react-components/" target="_blank">Become a better godfather for your React components</a> by Marios Fakiolas- Notes on component naming
            </Itm>
            <Itm>
              <a href="https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks/kelly-14-rules.html" target="_blank">Kelly Johnson's 14 Rules and Practices (Lockheed Martin Skunkworks)</a><Link to="/moreAbout/kellysRules">[Notes]</Link>
            </Itm>
            <Itm>
              <a href="https://www.nytimes.com/2020/03/17/technology/coronavirus-how-to-live-online.html" target="_blank">The Coronavirus Crisis Is Showing Us How to Live Online</a> from the NY Times
            </Itm>

            <Itm>
              <a href="https://wiki.debian.org/WhyTheName" target="_blank">Why The Name</a>: An IT-etymology/linuxguistics page for people wondering "how come the package yasysmand-cling has such a strange name?"
            </Itm>

            <Itm>
              <p>
                <a href="https://stackshare.io/stacks" target="_blank">"How I think about solving problems" - Human who codes</a>
              </p>

              <ol>
                <Itm>Is this really a problem?</Itm>
                <Itm>Does the problem need to be solved?</Itm>
                <Itm>Does the problem need to be solved now?</Itm>
                <Itm>Does the problem need to be solved by me?</Itm>
                <Itm>Is there a simpler problem I can solve instead?</Itm>
              </ol>

              <p>I've seen versions of this list in the past, but thinking about this list in relation to concrete examples of software engineering was a good refresher.</p>
            </Itm>

            <Itm>
              <a href="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1583521495/illustrateddev/web-security/web-security-final--large.png" target="_blank">Web Security Essentials Sketchnote</a> by <a href="https://illustrated.dev/" target="_blank">the illustrated dev</a>
            </Itm>

            <Itm>
              <p>
                Long read: <a href="https://blog.cloudflare.com/the-history-of-the-url/" target="_blank">The History of the URL</a>
              </p>

              <p>
                This particular paragraph really pulled some concepts together for me:
              </p>

              <p>
                <em>
                  To put this in context, you can think of the networking system the Internet uses as starting with IP, the Internet Protocol. IP is responsible for getting a small packet of data (around 1500 bytes) from one computer to another. On top of that we have TCP, which is responsible for taking larger blocks of data like entire documents and files and sending them via many IP packets reliably. On top of that, we then implement a protocol like HTTP or FTP, which specifies what format should be used to make the data we send via TCP (or UDP, etc.) understandable and meaningful.

                  In other words, TCP/IP sends a whole bunch of bytes to another computer, the protocol says what those bytes should be and what they mean.
                </em>
              </p>
            </Itm>
          </ul>
        </Section>

        <Section title="Repos">
          <p>I haven't gone through all of these yet but they look good!</p>

          <ul>
            <Itm>
              <a href="https://swiperjs.com/demos" target="_blank">Swiper- Most Modern Mobile Touch Slider</a>
            </Itm>
            <Itm>
              <a href="https://blitzjs.com/" target="_blank">Blitz.js</a> Like Rails for JS/React
            </Itm>
            <Itm>
              <a href="https://github.com/humanwhocodes/momoa" target="_blank">Momoa JSON</a> parses JSON and creates an abstract syntax tree
            </Itm>
            <Itm>
              <a href="https://tauri.studio/" target="_blank">Tauri</a>, another native desktop app framework<br/>
              <a href="https://www.smashingmagazine.com/2020/07/tiny-desktop-apps-tauri-vuejs/#comments-tiny-desktop-apps-tauri-vuejs" target="_blank">Creating Tiny Desktop Apps With Tauri And Vue.js</a>
            </Itm>
            <Itm>
              <a href="https://github.com/pahen/madge" target="_blank">Madge</a> for generating dependency graphs
            </Itm>
            <Itm>
              <a href="https://github.com/neutralinojs/neutralinojs" target="_blank">Neutralino</a> a lightweight alternative to Electron
            </Itm>
            <Itm>
              <a href="https://github.com/danistefanovic/build-your-own-x" target="_blank">build-your-own-x</a>: Build your own (insert technology here) by <a href="https://twitter.com/danistefanovic" target="_blank">Daniel Stefanovic</a>
            </Itm>

            <Itm>
              <a href="https://github.com/jwasham/coding-interview-university" target="_blank">coding-interview-university</a> a technical interview prep plan.
            </Itm>
            <Itm>
              <a href="https://github.com/donnemartin/system-design-primer" target="_blank">system-design-primer</a>: how to design large-scale systems
            </Itm>
            <Itm>
              <a href="https://github.com/public-apis/public-apis" target="_blank">public-apis</a>: A collective list of free APIs for use in software and web development.
            </Itm>
            <Itm>
              <a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank">Web developer roadmap</a>
            </Itm>
            <Itm>
              <a href="https://github.com/trekhleb/javascript-algorithms" target="_blank">JavaScript Algorithms and Data Structures</a>: JavaScript based examples of many popular algorithms and data structures.
            </Itm>
            <Itm>
              Not a repo but another list of public APIs <a href="https://medium.com/better-programming/a-curated-list-of-100-cool-and-fun-public-apis-to-inspire-your-next-project-7600ce3e9b3" target="_blank">A Curated List of 100 Cool and Fun Public APIs to Inspire Your Next Project</a>
            </Itm>
          </ul>
        </Section>

        <Section title="Books">
          <ul>
            <Itm>
              <a href="https://www.amazon.com/Zero-Bugs-Program-Faster-Thompson/dp/0996193308/ref=sr_1_1?dchild=1&keywords=Zero+Bugs+and+Program+Faster&qid=1588629339&sr=8-1" target="_blank">Zero Bugs and Program Faster</a> by Kate Thompson (ISBN: 9780996193306) - <Link to="/moreAbout/media/books/zeroBugsAndProgramFaster">Notes</Link>
            </Itm>

            <Itm>
              <a href="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X" target="_blank">The Pragmatic Programmer: From Journeyman to Master</a> by Andrew Hunt and David Thomas (ISBN: 0-201-61622-X) - <Link to="/moreAbout/media/books/pragmaticProgrammer">Notes</Link>
            </Itm>

            <Itm>
            <a href="https://www.amazon.com/Zero-One-Notes-Startups-Future-ebook/dp/B00J6YBOFQ/ref=sr_1_1?crid=VY553GJE9L24&dchild=1&keywords=from+zero+to+one&qid=1612753382&sprefix=from+zero+%2Caps%2C221&sr=8-1" target="_blank">Zero to One: Notes on Startups, or How to Build the Future</a> by Peter Thiel with Blake Masters (ISBN: 978-0-8041-3929-8) - <Link to="/moreAbout/media/books/zeroToOne">Notes</Link>
            </Itm>
          </ul>
        </Section>
      </Box>
    </MoreAboutLayout>
  );
}

export default TechnicalResources;
