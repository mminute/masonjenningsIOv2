import React, { Fragment, useState } from 'react';
import Controls from './Controls';
import FiltersPanel from '../FiltersPanel'
import Game from './Game';
import gamesDataRaw, { BOARD_GAME, PLATFORM, VIDEO_GAME } from '../../DATA/games';
import GamesFiltersController from './GamesFiltersController';
import MediaLayout from '../MediaLayout';
import ShadedRow from '../ShadedRow';
import TabbedDataController from '../TabbedDataController';
import { Box, Divider, Sticky, Tabs } from 'gestalt';

const platforms = Object.values(PLATFORM);

const tags = [
  'completed',
  'owned',
  'played',
  'recommended',
  'vr',
  BOARD_GAME,
  VIDEO_GAME,
  ...platforms
];

const href = 'http://www.masonjennings.io/';

const tabs = [
  { text: 'All', href, id: 'all' },
  { text: 'Board games', href, id: BOARD_GAME },
  { text: 'Video games', href, id: VIDEO_GAME },
];

const gamesData = gamesDataRaw.sort((itemA, itemB) => {
  return itemA.title < itemB.title;
});

const boardGames = gamesData.filter(item => {
  return item.type === BOARD_GAME;
});

const videoGames = gamesData.filter(item => {
  return item.type === VIDEO_GAME;
});

function Games() {
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  // Update handleChangeTab to clear tags???? Or clear video game specific tags???
  return (
    <TabbedDataController selections={[gamesData, boardGames, videoGames]}>
      {({ activeTabIndex, currentSelection, handleChangeTab }) => (
        <MediaLayout title="Games!">
          {({ stickyTop }) => (
            <div className="inconsolata gray textHeight-regular">
              <GamesFiltersController data={currentSelection}>
                {({
                  handleAddTag,
                  handleRemoveTag,
                  items,
                  searchTerm,
                  selectedTags,
                  setSearchTerm,
                  setSelectedTags,
                  setSort,
                  setSortOrder,
                  sort,
                  sortOrder,
                }) => {
                  const handleFiltersPanelUpdate = data => {
                    setSearchTerm(data.searchTerm);
                    setSelectedTags(data.selectedTags);
                  };

                  return (
                    <Fragment>
                      <Sticky top={stickyTop + 1}>
                        <Box color="white">
                          <div style={{ paddingTop: '16px' }}>
                            <Controls
                              count={items.length}
                              onRemoveTag={handleRemoveTag}
                              searchTerm={searchTerm}
                              selectedTags={selectedTags}
                              setSearchTerm={setSearchTerm}
                              setShowFiltersPanel={setShowFiltersPanel}
                              setSort={setSort}
                              setSortOder={setSortOrder}
                              sort={sort}
                              sortOrder={sortOrder}
                            />
                          </div>

                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            paddingY={3}
                          >
                            <Tabs
                              activeTabIndex={activeTabIndex}
                              onChange={handleChangeTab}
                              tabs={tabs}
                            />
                          </Box>
                          <Divider />
                        </Box>
                      </Sticky>

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <div style={{ width: '100%' }}>
                          {items.map((game, idx) => (
                            <ShadedRow key={game.title} idx={idx}>
                              <Game data={game} onAddTag={handleAddTag} />
                            </ShadedRow>
                          ))}
                        </div>
                      </Box>

                      {showFiltersPanel && (
                        <FiltersPanel
                          currentSearchTerm={searchTerm}
                          onSubmit={handleFiltersPanelUpdate}
                          selectedTags={selectedTags}
                          setShowSheet={setShowFiltersPanel}
                          tags={tags}
                        />
                      )}
                    </Fragment>
                  );
                }}
              </GamesFiltersController>
            </div>
          )}
        </MediaLayout>
      )}
    </TabbedDataController>
  );
}

export default Games;
