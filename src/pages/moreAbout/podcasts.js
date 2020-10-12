import React from 'react';
import Itm from '../../components/Itm';
import MoreAboutLayout from '../../components/MoreAboutLayout';
import { Box } from 'gestalt';
import podcastList, {
  ABANDONED,
  ALWAY_LISTEN,
  SOMETIMES_LISTEN,
  STARTED_LISTENING,
  TO_CHECKOUT,
  USE_TO_LISTEN,
} from '../../DATA/podcasts';
import 'gestalt/dist/gestalt.css';

const categoryTitle = {
  [ABANDONED]: 'I’ve abandoned',
  [ALWAY_LISTEN]: 'I always listen to',
  [SOMETIMES_LISTEN]: 'I sometimes listen to',
  [STARTED_LISTENING]: 'I’ve started listening to',
  [TO_CHECKOUT]: 'I’ve been meaning to check out',
  [USE_TO_LISTEN]: 'I use to listen to',
};

function Category({ id }) {
  const categoryItems = podcastList.filter((itm) => itm.category === id);

  return (
    <Box smColumn={12} mdColumn={6} marginTop={4}>
      <section>
        <h2 className="montserrat" style={{ fontSize: '18px' }}>
          {categoryTitle[id]}:
        </h2>
          
        <Box>
          <div className="inconsolata gray textHeight-regular">
            <ul>
              {categoryItems.map((itm, idx) => (
                <Itm key={idx}>
                  <a href={itm.url} target="_blank">{itm.name}</a>
                </Itm>
              ))}
            </ul>
          </div>
        </Box>
      </section>
    </Box>
  );
}

function Podcasts() {
  return (
    <MoreAboutLayout title="Podcasts">
      <Box display="flex" marginStart={12} wrap>
        {[
          ALWAY_LISTEN,
          SOMETIMES_LISTEN,
          STARTED_LISTENING,
          TO_CHECKOUT,
          USE_TO_LISTEN,
          ABANDONED,
        ].map((id) => (
          <Category key={id} id={id} />
        ))}
      </Box>
    </MoreAboutLayout>
  );
}

export default Podcasts;
