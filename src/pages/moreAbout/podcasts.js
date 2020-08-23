import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/seo';
import navLinks from '../../components/DATA/navLinks';
import podcastList, {
  ABANDONED,
  ALWAY_LISTEN,
  SOMETIMES_LISTEN,
  STARTED_LISTENING,
  TO_CHECKOUT,
  USE_TO_LISTEN,
} from '../../components/DATA/podcasts';
import { Box, Heading, Link, Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

function Podcast({ data }) {
  return (
    <Box marginBottom={2} >
      <Text>
        <Link href={data.url} target="blank">{data.name}</Link>
      </Text>
    </Box>
  );
}

const categoryTitle = {
  [ABANDONED]: 'I’ve abandoned',
  [ALWAY_LISTEN]: 'I always listen to',
  [SOMETIMES_LISTEN]: 'I sometimes listen to',
  [STARTED_LISTENING]: 'I’ve started listening to',
  [TO_CHECKOUT]: 'I’ve been meaning to check out',
  [USE_TO_LISTEN]: 'I use to listen to',
};

function Category({ id }) {
  const categoryItems = podcastList.filter(itm => itm.category === id);

  return (
    <Box smColumn={12} mdColumn={6} marginTop={4}>
      <section>
        <Heading size="sm">{categoryTitle[id]}:</Heading>
        <Box paddingY={3}>
          {categoryItems.map((itm, idx) => (
            <Podcast key={idx} data={itm} />
          ))}
        </Box>
      </section>
    </Box>
  );
}

function Podcasts() {
  return (
    <Layout headerLinks={[navLinks.contact, navLinks.home]}>
      <SEO title="Podcasts" />
      <Heading size="md">Podcasts page</Heading>
      <Box display="flex" wrap>
        {[
          ALWAY_LISTEN,
          SOMETIMES_LISTEN,
          STARTED_LISTENING,
          TO_CHECKOUT,
          USE_TO_LISTEN,
          ABANDONED,
        ].map(id => (
          <Category key={id} id={id} />
        ))}
      </Box>
    </Layout>
  );
}

export default Podcasts;
