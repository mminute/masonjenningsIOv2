import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';

function Articles() {
  return (
    <MoreAboutLayout title="Articles">
      <div className="inconsolata gray textHeight-regular">
        <ul>
          <Itm>
            <a href="https://www.outsideonline.com/2415069/sperm-whales-research-dominica" target="_blank">What I Saw When I Came Eye to Eye with a Whale</a>
          </Itm>

          <Itm>
            <a href="https://avatars.inc/" target="_blank">Avatars Inc</a>- A collection of short stories inspired by the <a href="https://avatar.xprize.org/prizes/avatar" target="_blank">ANA Avatar XPrize</a>
          </Itm>

          <Itm>
            <a href="https://www.thedrive.com/news/33645/the-incredible-story-of-the-us-armys-earth-shaking-off-road-land-trains?utm_source=pocket&utm_medium=email&utm_campaign=pockethits" target="_blank">The Incredible Story of the US Army's Earth-Shaking, Off-Road Land Trains</a>
          </Itm>

          <Itm>
            <a href="https://www.readingdesign.org/250-things" target="_blank">TWO HUNDRED FIFTY THINGS AN ARCHITECT SHOULD KNOW by Michael Sorkin</a>
          </Itm>

          <Itm>
            <a href="https://99percentinvisible.org/episode/unsheltered-in-place/" target="_blank">99% Invisible: Unsheltered in Place</a>
          </Itm>

          <Itm>
            <a href="https://99percentinvisible.org/episode/masking-for-a-friend/" target="_blank">99% Invisible: Masking for a Friend</a>
          </Itm>

          <Itm>
            <a href="https://www.theatlantic.com/magazine/archive/2020/07/big-tech-pandemic-power-grab/612238/" target="_blank">What Big Tech Wants Out of the Pandemic: The firms are all too eager to help the government manage the coronavirus crisis.</a>
          </Itm>

          <Itm>
            <a href="https://mondaynote.com/the-car-reinvented-from-scratch-4486564c086e" target="_blank">The car, reinvented. From scratch.</a> - A series
          </Itm>

          <Itm>
            <a href="https://www.espn.com/espn/story/_/id/29266542/could-bruce-lee-win-real-fight" target="_blank">Could Bruce Lee win a real fight?</a>
          </Itm>

          <Itm>
            <a href="https://www.technologyreview.com/2020/06/12/1002838/avi-schiffmann-17-year-old-guide-building-pandemic-protest-tracker/?utm_source=pocket&utm_medium=email&utm_campaign=pockethits" target="_blank">A teenager’s guide to building the world’s best pandemic and protest trackers</a>
          </Itm>

          <Itm>
            <a href="https://www.theguardian.com/books/2020/may/09/the-real-lord-of-the-flies-what-happened-when-six-boys-were-shipwrecked-for-15-months" target="_blank">The real Lord of the Flies: what happened when six boys were shipwrecked for 15 months</a> by <a href="https://twitter.com/rcbregman" target="_blank">Rutger Bregman</a>
          </Itm>

          <Itm>
            <a href="https://bfi.uchicago.edu/wp-content/uploads/BFI_White-Paper_Dingel_Neiman_3.2020.pdfy" target="_blank">How Many Jobs Can be Done at Home?</a> - a white paper from the University of Chicago written during the COVID-19 epidemic. 
          </Itm>

          <Itm>
            <a href="https://www.wired.com/story/lee-holloway-devastating-decline-brilliant-young-coder/" target="_blank">The Devastating Decline of a Brilliant Young Coder</a> descirbes the dramatic impact of frontotemporal lobar degeneration (FTD) on one man's personality.
          </Itm>
        </ul>
      </div>
    </MoreAboutLayout>
  );
}

export default Articles;
