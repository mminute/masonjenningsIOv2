import React, { Fragment, useState } from 'react';
import Controls from './Controls';
import MoreAboutLayout from '../MoreAboutLayout';
import Show from './Show';
import tvData from '../../DATA/tvWatched';
import VisualMediaPageController from './VisualMediaPageController';
import { Box, Divider, Tabs } from 'gestalt';

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
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const currentSelection = selections[activeTabIndex];

  const handleChangeTab = ({ activeTabIndex, event }) => {
    event.preventDefault();
    setActiveTabIndex(activeTabIndex);
  };

  return (
    <MoreAboutLayout title="TV I've watched">
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

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <div style={{ width: '100%' }}>
                  {items.map((tvShow, idx) => (
                    <Box
                      key={tvShow.imdbId || tvShow.title}
                      alignItems="center"
                      color={idx % 2 ? 'lightGray' : 'white'}
                      display="flex"
                      minHeight={56}
                      padding={3}
                      rounding={6}
                    >
                      <Show data={tvShow} onAddTag={handleAddTag} />
                    </Box>
                  ))}
                </div>
              </Box>
            </Fragment>
          )}
        </VisualMediaPageController>
      </div>
    </MoreAboutLayout>
  );
}

export default TV;
