import React from 'react';
import MoreAboutLayout from '../../MoreAboutLayout';
import booksToReadData from '../../../DATA/booksToRead';
import Tags from '../Tags';
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
  console.log(booksToReadData);

  return (
    <MoreAboutLayout title="Books I'm Interested In Reading">
      <div className="inconsolata gray textHeight-regular">
        {booksToReadData.map((bk, idx) => (
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
                    <Tags onTap={() => {}} tags={['hello', 'world']} />
                  </Box>
                )}
              </Stack>
            </Box>
          </Box>
        ))}
      </div>
    </MoreAboutLayout>
  );
}
