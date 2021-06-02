import React, { Fragment } from 'react';
import Controls from './Controls';
import Show from './Show';
import TabbedDataController from '../TabbedDataController';
import tvData from '../../DATA/tvWatched';
import VisualMediaPageController from './VisualMediaPageController';
import MediaLayout from '../MediaLayout';
import ShadedRow from '../ShadedRow';
import { Box, Divider, Sticky, Tabs } from 'gestalt';

const childhoodShows = tvData.filter(item => {
  return item.tags.includes('childhood');
});

const adulthoodShows = tvData.filter(item => {
  return !item.tags.includes('childhood');
});

const selections = [tvData, childhoodShows, adulthoodShows];

const href = 'http://www.masonjennings.io/';

const tabs = [
  { text: 'All', href, id: 'all' },
  { text: 'As a child', href, id: 'childhood' },
  { text: 'As an adult', href, id: 'adulthood' },
];

function TV() {
  return (
    <TabbedDataController selections={selections}>
      {({ activeTabIndex, currentSelection, handleChangeTab }) => (
        <MediaLayout title="TV I've watched">
          {({ stickyTop }) => (
            <div className="inconsolata gray textHeight-regular">
              <VisualMediaPageController data={currentSelection}>
                {({
                  items,
                  selectedTags,
                  handleAddTag,
                  handleRemoveTag,
                  sortOrder,
                  setSortOder,
                  sort,
                  setSort,
                  searchFilter,
                  setSearchFilter,
                  searchTerm,
                  setSearchTerm,
                }) => (
                  <Fragment>
                    <Sticky top={stickyTop + 1}>
                      <Box color="white">
                        <div style={{ paddingTop: '16px' }}>
                          <Controls
                            selectedTags={selectedTags}
                            onRemoveTag={handleRemoveTag}
                            count={items.length}
                            sortOrder={sortOrder}
                            setSortOder={setSortOder}
                            sort={sort}
                            setSort={setSort}
                            searchFilter={searchFilter}
                            setSearchFilter={setSearchFilter}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
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
                        {items.map((tvShow, idx) => (
                          <ShadedRow key={tvShow.imdbId || tvShow.title} idx={idx}>
                            <Show data={tvShow} onAddTag={handleAddTag} />
                          </ShadedRow>
                        ))}
                      </div>
                    </Box>
                  </Fragment>
                )}
              </VisualMediaPageController>
            </div>
          )}
        </MediaLayout>
      )}
    </TabbedDataController>
  );
}

export default TV;
