import React from 'react';
import Image from '../../components/Image';
import SocialList from '../../components/SocialList/SocialList';
import MoreAboutLayout from '../../components/MoreAboutLayout';
import { Link } from 'gatsby';
import { Box } from 'gestalt';

export default function Me() {
  return (
    <MoreAboutLayout title="MORE ABOUT ME">
      <Box marginStart={12}>
        <div className="inconsolata gray" style={{ fontSize: '18px' }}>
          For professional/semi-professional info you can check out my <Link to="/resume">resume</Link> and these links:
        </div>

        <SocialList />

        <p className="inconsolata gray" style={{ fontSize: '18px' }}>
          And here's a list of <Link to="/moreAbout/technicalResources">technical resources</Link> I've collected
        </p>
      </Box>

      <Box marginTop={12}>
        <Box marginBottom={12}>
          <h2 className="montserrat">
            FOR EVERYTHING ELSE READ ON!
          </h2>
        </Box>

        <Box marginStart={12}>
          <div className="inconsolata gray">
            <p>
              Maybe you'd like to hear about <Link to="/moreAbout/podcasts">podcasts I'm listening to</Link>?
            </p>

            <div>
              Or see a list of all the books:
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '8px' }}>
                  + <Link to="/moreAbout/books/read">I've read</Link>
                </li>

                <li>
                  + <Link to="/moreAbout/books/toRead">I'd like to read</Link>
                </li>
              </ul>
            </div>

            <p>
              Or read some of the <a href="https://trektrekgoose.wordpress.com/" target="_blank">blog I wrote that lovingly makes fun of Star Trek: TOS</a>?
            </p>

            <div>
              I work at <Box display="inlineBlock" width={16}><Image fileName="pinterest.png" /></Box> <a href="https://www.pinterestcareers.com/homepage" target="_blank">Pinterest</a> so of course you can check out <a href="https://www.pinterest.com/masonicspeed/" target="_blank">what I am pinning!</a> (A lot of it is just for testing bugs 😬)
            </div>

            <p>
              I'm especially fond of this <a href="https://www.pinterest.com/masonicspeed/my-projects/" target="_blank">board of things I've made.</a>
            </p>

            <p>
              Here is a collection of <Link to="/moreAbout/science">sciency articles</Link>
            </p>

            <p>
              Resources for <Link to="/moreAbout/makers">making/makers</Link>
            </p>

            <p>
              Resources on <Link to="/moreAbout/socialJustice">social justice</Link>
            </p>

            <p>
              And another one of <Link to="/moreAbout/interestingPeople">interesting and inspiring people</Link>
            </p>

            <p>
              And finally, collections of random <Link to="/moreAbout/articles">articles</Link> and <Link to="/moreAbout/randomLinks">links</Link>
            </p>
          </div>
        </Box>
      </Box>
    </MoreAboutLayout>
  );
}
