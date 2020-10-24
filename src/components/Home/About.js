import React from 'react';
import Image from '../Image';
import SocialList from '../SocialList/SocialList';
import { Link } from 'gatsby';
import { Box, Mask } from 'gestalt';
import '../../styles/et-line-font.css';

export default function About({ paddingTop }) {
  return (
    <section style={{ paddingTop }}>
      <Box display="flex" justifyContent="between">
        <Box smColumn={12} mdColumn={6}>
          <h1 className="montserrat" style={{ fontSize: '30px' }}>ABOUT ME</h1>

          <div className="inconsolata textSize-regular textHeight-regular gray">
            All of the books in the world contain no more information than is broadcast as video in a single large American city in a single year. Not all bits have equal value.<br />
            -Carl Sagan
          </div>

          <div className="verdana textSize-regular textHeight-regular gray">
            <p>
              I'm a maker.
            </p>

            <p>
              I'm also a software engineer.
            </p>

            <p>
              It started with Lego and inevitably moved toward dismantling, poking, prodding, and reassembling more complex and expensive toys. Soon no household items were safe from my marauding Phillips head screwdriver, though all were returned in working order (with the notable and expensive exception of a Betamax videotape player). This curiosity naturally led me in the direction of architecture, engineering, technology, and design.
            </p>

            <p>
              It was not until a job in aerial survey that I began to explore the world of code. Working in a small and tech-centric industry created an opportunity to demystify the inner workings of the computer and put names and faces to some of the gatekeepers of code. I soon began my rudimentary first steps into the world of programming and eventually found my way to the <a href="http://flatironschool.com/" style={{ textDecoration: 'none', color: '#000' }}>//Flatiron School</a> for a three month intensive course of study in web development.  It was an incredible opportunity to be completely focused on learning to code surrounded by like-minded peers in a supportive and enthusiastic community.
            </p>
          </div>
        </Box>

        <Box smColumn={12} mdColumn={4} marginStart={2} marginBottom="auto" marginTop="auto">
          <Mask rounding={3}>
          {/* /Users/masonjennings/code/masonjenningsIOv2/src/components/Home/About.js */}
          {/* /Users/masonjennings/code/masonjenningsIOv2/src/images/00-eniac.jpg */}
            {/* <img src="../../images/mason_jennings_pic.jpg" /> */}
            <Image fileName="mason_jennings_pic.jpg" />
          </Mask>
        </Box>
      </Box>

      <Box>
        <Link to="/moreAbout/me">
          <div className="montserrat" style={{ color: '#000' }}>
            MORE ABOUT ME
          </div>
        </Link>

        <SocialList />
      </Box>
    </section>
  );
}
