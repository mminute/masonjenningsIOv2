import React, { Fragment } from 'react';
import SearchFilterSelect from './SearchFilterSelect';
import Pill from './Pill';
import { Box, Divider, IconButton, SearchField, SelectList } from 'gestalt';

export default function Controls(props) {
  const {
    bookCount,
    density,
    onRemoveTag,
    searchFilter,
    searchTerm,
    selectedTags,
    setDensity,
    setSearchFilter,
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

        <SearchFilterSelect
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />

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
              {`${bookCount} books`}

              <Box paddingX={1}>
                <IconButton
                  accessibilityLabel={
                    density ? 'Change to regular view' : 'Change to dense view'
                  }
                  icon={density ? 'view-type-default' : 'view-type-dense'}
                  onClick={setDensity}
                  size="sm"
                  bgColor="lightGray"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <SelectList
          id="sort"
          name="sort"
          onChange={({ value }) => setSort(value)}
          options={[
            { value: 'date', label: 'Date' },
            { value: 'title', label: 'Title' },
            { value: 'author', label: 'Author' },
          ]}
          placeholder="Sort By"
          label="Sort by"
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
