import React from 'react';
import BookPageController from '../BookPageController';
import booksToReadData from '../../../DATA/booksToRead';
import Controls from '../Controls';
import MoreAboutLayout from '../../MoreAboutLayout';
import Tags from '../../Tags';
import { Box, Stack } from 'gestalt';

function MaybeLink({ children, link }) {
  return link ? (
    <a href={link} target="_blank">
      {children}
    </a>
  ) : (
    children
  );
}

export default function BooksToReadPage() {
  return (
    <MoreAboutLayout title="Books I'm Interested In Reading">
      <BookPageController data={booksToReadData}>
        {({
          books,
          handleAddTag,
          handleRemoveTag,
          searchFilter,
          setSearchFilter,
          searchTerm,
          setSearchTerm,
          selectedTags,
          sort,
          setSort,
          sortOrder,
          setSortOder,
        }) => {
          return (
            <div className="inconsolata gray textHeight-regular">
              <Controls
                bookCount={books.length}
                onRemoveTag={handleRemoveTag}
                searchFilter={searchFilter}
                searchTerm={searchTerm}
                selectedTags={selectedTags}
                setSearchFilter={setSearchFilter}
                setSearchTerm={setSearchTerm}
                setSort={setSort}
                setSortOder={setSortOder}
                sort={sort}
                sortOrder={sortOrder}
              />

              {books.map((bk, idx) => (
                <Box
                  key={bk.title}
                  alignItems="center"
                  color={idx % 2 ? 'lightGray' : 'white'}
                  display="flex"
                  minHeight={56}
                  padding={3}
                  rounding={6}
                >
                  <Box marginStart={5}>
                    <Stack>
                      <Box>
                        <b>
                          <MaybeLink link={bk.link}>{bk.title}</MaybeLink>
                        </b>{' '}
                        by {bk.author}
                      </Box>
                      {bk.tags?.length && (
                        <Box marginStart={3}>
                          <Tags title="tags" onTap={handleAddTag} tags={bk.tags} />
                        </Box>
                      )}
                    </Stack>
                  </Box>
                </Box>
              ))}
            </div>
          );
        }}
      </BookPageController>
    </MoreAboutLayout>
  );
}
