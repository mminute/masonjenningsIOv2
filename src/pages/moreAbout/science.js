import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';

function Science() {
  return (
    <MoreAboutLayout title="Science">
      <div className="inconsolata gray textHeight-regular">
        <ul>
          <Itm>
            <a href="https://www.forbes.com/sites/startswithabang/2018/08/11/ask-ethan-is-spacetime-really-a-fabric/#50146adc97fc" target="_blank">Ask Ethan: Is Spacetime Really A Fabric?</a>
          </Itm>

          <Itm>
            <a href="https://www.popularmechanics.com/space/solar-system/a29849258/solar-system-moon-ranking/" target="_blank">Every Moon in Our Solar System, Ranked</a> by <a href="https://twitter.com/jlorileman" target="_blank">Jennifer Leman</a>
          </Itm>

          <Itm>
            <a href="https://arstechnica.com/features/2020/05/the-story-of-cheaper-batteries-from-smartphones-to-teslas/?utm_source=pocket&utm_medium=email&utm_campaign=pockethits" target="_blank">The story of cheaper batteries, from smartphones to Teslas</a>
          </Itm>

          <Itm>
            <a href="https://www.clickorlando.com/news/local/2020/02/21/no-scrubs-heres-what-it-takes-to-forecast-space-coast-launch-landing-weather/" target="_blank">No scrubs: Here’s what it takes to forecast Space Coast launch, landing weather</a> by <a href="https://twitter.com/EMSpeck" target="_blank">Emilee Speck</a>
          </Itm>

          <Itm>
            <a href="https://medium.com/starts-with-a-bang/we-all-learned-physics-biggest-myth-that-projectiles-make-a-parabola-1a05450c406b" target="_blank">We All Learned Physics’ Biggest Myth: That Projectiles Make A Parabola</a>
            <ul>
              <Itm>
                <a href="https://www.forbes.com/sites/startswithabang/2020/03/12/we-all-learned-physics-biggest-myth-that-projectiles-make-a-parabola/#17efc0995d2e" target="_blank">The same article on Forbes</a>
              </Itm>

              <Itm>
                <a href="https://www.forbes.com/sites/startswithabang/" target="_blank">Starts With A Bang</a> originates on Forbes.
              </Itm>
            </ul>
          </Itm>

          <Itm>
            <a href="https://www.forbes.com/sites/startswithabang/2019/03/27/what-was-it-like-when-venus-and-mars-became-uninhabitable-planets/#664c38917b91" target="_blank">What Was It Like When Venus And Mars Became Uninhabitable Planets?</a>
          </Itm>

          <Itm>
            <a href="https://www.technologyreview.com/2018/06/22/142160/this-is-how-many-people-wed-have-to-send-to-proxima-centauri-to-make-sure-someone-actually/" target="_blank">This is how many people we’d have to send to Proxima Centauri to make sure someone actually arrives</a> MIT Technology Review
          </Itm>
        </ul>
      </div>
    </MoreAboutLayout>
  );
}

export default Science;
