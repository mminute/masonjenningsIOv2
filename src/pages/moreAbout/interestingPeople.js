import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';


function InterestingPeople() {
  return (
    <MoreAboutLayout title="Interesting People">
      <div className="inconsolata gray textHeight-regular">
        <ul>
          <Itm>
            <a href="https://afrotech.com/98-year-old-vivian-fisher-just-achieved-her-dream-of-graduating-high-school" target="_blank">This 98 year old high school graduate</a>
          </Itm>

          <Itm>
            <a href="https://afrotech.com/black-history-dr-gladys-west-gps-technology" target="_blank">Dr. Gladys West</a> modeled the shape of the world so that you can use GPS to navigate to the Whole Foods 5 blocks away.  Say thank you. <a href="https://en.wikipedia.org/wiki/Gladys_West" target="_blank">wiki</a>
          </Itm>

          <Itm>
            <a href="https://en.wikipedia.org/wiki/Bessie_Coleman" target="_blank">Bessie (Elizabeth) Coleman</a> was the first woman of African-American descent, and also the first of Native-American descent, to hold a pilot license.
          </Itm>

          <Itm>
            Tangentially related to ☝️ <a href="https://www.becauseofthemwecan.com/blogs/botwc-firsts/she-just-became-the-first-known-disabled-african-american-female-to-receive-a-pilots-license" target="_blank">Leslie Irby</a> is the first known African American female with a disability to receive a pilots license
          </Itm>

          <Itm>
            <a href="https://en.wikipedia.org/wiki/Annie_Malone" target="_blank">Annie Malone</a> was the first female African-American millionaire.
          </Itm>
        </ul>
      </div>
    </MoreAboutLayout>
  );
}

export default InterestingPeople;
