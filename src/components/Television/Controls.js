import React, { Fragment } from 'react';
import Pill from '../Pill';
import { Box, Divider, IconButton, SearchField, SelectList } from 'gestalt';

function SearchFilterSelect(props) {
  const {
    searchFilter,
    setSearchFilter,
  } = props;

  return (
    <SelectList
      id="searchFilter"
      name="searchFilter"
      onChange={({ value }) => setSearchFilter(value)}
      options={[
        { value: 'all', label: 'All' },
        { value: 'title', label: 'Title' },
        { value: 'genre', label: 'Genre' },
        { value: 'actor', label: 'Actor' },
      ]}
      placeholder="Search filter"
      value={searchFilter}
    />
  );
}

export default function Controls(props) {
  const {
    count,
    onRemoveTag,
    searchFilter,
    searchTerm,
    selectedTags,
    setSearchFilter,
    setSearchTerm,
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

        <SearchFilterSelect
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
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
          <Box display="flex" direction="row" alignItems="center">
            {`${count} shows`}
          </Box>
        </Box>

        <SelectList
          id="sort"
          name="sort"
          onChange={({ value }) => setSort(value)}
          options={[
            { value: 'firstAired', label: 'First aired' },
            { value: 'title', label: 'Title' },
            { value: 'imdbRating', label: 'IMDb rating' },
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
