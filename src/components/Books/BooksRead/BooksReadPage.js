import React, { useState } from 'react';
import Book from './Book';
import BookPageController from '../BookPageController';
import booksReadData from '../../../DATA/booksRead';
import Controls from '../Controls';
import FiltersPanel from '../../FiltersPanel';
import MoreAboutLayout from '../../MoreAboutLayout';
import SearchFilterSelect from '../SearchFilterSelect';
import Summary from './Summary';
import { Box, TapArea } from 'gestalt';

const tags = Array.from(
  new Set(
    booksReadData.reduce((accumulator, book) => {
      return [...accumulator, ...book.tags];
    }, [])
  )
).sort();

export default function BooksReadPage() {
  const [density, setDensity] = useState(false);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <MoreAboutLayout
      title="Books I've Read"
      subTitle={
        <Box marginStart={12} marginBottom={-4}>
          <div className="inconsolata gray textHeight-regular">
            <TapArea onTap={() => setShowSummary(true)}>
              <h3>See a summary</h3>
            </TapArea>
          </div>
        </Box>
      }
    >
      <BookPageController data={booksReadData}>
        {({
          books,
          handleAddTag,
          handleRemoveTag,
          searchFilter,
          setSearchFilter,
          searchTerm,
          setSearchTerm,
          selectedTags,
          setSelectedTags,
          sort,
          setSort,
          sortOrder,
          setSortOder,
        }) => {
          const handleFiltersPanelUpdate = data => {
            setSearchTerm(data.searchTerm);
            setSearchFilter(data.searchFilter);
            setSelectedTags(data.selectedTags);
          };

          return (
            <div className="inconsolata gray textHeight-regular">
              <Controls
                bookCount={books.length}
                density={density}
                onRemoveTag={handleRemoveTag}
                searchFilter={searchFilter}
                searchTerm={searchTerm}
                selectedTags={selectedTags}
                setDensity={() => setDensity(current => !current)}
                setSearchFilter={setSearchFilter}
                setSearchTerm={setSearchTerm}
                setShowFiltersPanel={setShowFiltersPanel}
                setSort={setSort}
                setSortOder={setSortOder}
                sort={sort}
                sortOrder={sortOrder}
              />

              {books.map((bookData, idx) => (
                <Box
                  key={`${bookData.hashCode}-${idx}`}
                  color={idx % 2 ? 'lightGray' : 'white'}
                  padding={3}
                  rounding={6}
                >
                  <Book
                    data={bookData}
                    density={density}
                    onAddTag={handleAddTag}
                  />
                </Box>
              ))}

              {showFiltersPanel && (
                <FiltersPanel
                  currentSearchFilter={searchFilter}
                  currentSearchTerm={searchTerm}
                  onSubmit={handleFiltersPanelUpdate}
                  searchFilterSelect={SearchFilterSelect}
                  selectedTags={selectedTags}
                  setShowSheet={setShowFiltersPanel}
                  tags={tags}
                />
              )}

              {showSummary && (
                <Summary
                  data={booksReadData}
                  onDismiss={() => setShowSummary(false)}
                />
              )}
            </div>
          );
        }}
      </BookPageController>
    </MoreAboutLayout>
  );
}
