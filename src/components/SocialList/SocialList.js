import React from 'react';
import githubImg from '../../images/GitHub-Mark-32px.png';
import { Box } from 'gestalt';
import '../../styles/et-line-font.css';
import './SocialList.css';


export default function SocialList() {
  return (
    <ul className="social-list">
      <li>
        <Box marginEnd={3}>
          <a href="http://twitter.com/mminute_" target="_blank"><span className="icon-twitter" /></a>
        </Box>
      </li>

      <li>
        <Box marginEnd={3}>
          <a href="https://www.linkedin.com/in/masonjennings" target="_blank"><span className="icon-linkedin" /></a>
        </Box>
      </li>

      <li>
        <Box marginEnd={3}>
          <a href="https://github.com/mminute" target="_blank" ><img src={githubImg} alt="github" style={{ width: '24px', marginBottom: '-2px' }} /></a>
        </Box>
      </li>

      <li>
        <Box marginEnd={3}>
          <a href="http://mminute.github.io" target="_blank"><span className="icon-pencil" /></a>
        </Box>
      </li>
    </ul>
  );
}
