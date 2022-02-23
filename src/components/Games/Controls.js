import React, { Fragment } from 'react';
import Pill from '../Pill';
import { Box, Divider, IconButton, SearchField, SelectList } from 'gestalt';

// Similar to Books/Controls
function Controls(props) {
  const {
    count,
    onRemoveTag,
    searchTerm,
    selectedTags,
    setSearchTerm,
    setShowFiltersPanel,
    setSort,
    setSortOder,
    sort,
    sortOrder,
  } = props;

  return (
    <Fragment>
      <Box
        alignItems="end"
        direction="row"
        display="flex"
        justifyContent="end"
        marginBottom={1}
      >
        <Box flex="grow">
          <SearchField
            accessibilityLabel="Search"
            id="searchField"
            onChange={({ value }) => setSearchTerm(value)}
            value={searchTerm}
          />
        </Box>

        <IconButton
          accessibilityLabel="Filters"
          icon="filter"
          onClick={() => setShowFiltersPanel(current => !current)}
        />
      </Box>

      {selectedTags && (
        <Box direction="row" display="flex" paddingY={2} wrap>
          {selectedTags.map(tag => (
            <Pill
              key={`selected-${tag}`}
              id={tag}
              icon="clear"
              onClick={onRemoveTag}
              text={tag}
            />
          ))}
        </Box>
      )}

      <Divider />

      <Box
        alignItems="end"
        direction="row"
        display="flex"
        justifyContent="end"
        paddingY={2}
      >
        <Box flex="grow">
          <Box flex="grow">
            <Box display="flex" direction="row" alignItems="center">
              {`${count} games`}
            </Box>
          </Box>
        </Box>

        <SelectList
          id="sort"
          name="sort"
          onChange={({ value }) => setSort(value)}
          options={[
            { value: 'title', label: 'Title' },
            { value: 'type', label: 'Type' },
          ]}
          placeholder="Sort By"
          value={sort}
        />

        <IconButton
          accessibilityLabel={
            sortOrder === 'ascending' ? 'Sort ascending' : 'Sort descending'
          }
          icon={
            sortOrder === 'ascending' ? 'sort-ascending' : 'sort-descending'
          }
          onClick={() =>
            setSortOder(currentSort =>
              currentSort === 'ascending' ? 'descending' : 'ascending'
            )
          }
        />
      </Box>

      <Divider />
    </Fragment>
  );
}

export default Controls;
