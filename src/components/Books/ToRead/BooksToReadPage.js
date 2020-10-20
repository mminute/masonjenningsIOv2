import React from 'react';
import MoreAboutLayout from '../../MoreAboutLayout';
import booksToReadData from '../../../DATA/booksToRead';
import { Box } from 'gestalt';

function MaybeLink({ link, text }) {
  return link ? (
    <a href={link} target="_blank">
      {text}
    </a>
  ) : (
    text
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
              <b><MaybeLink link={bk.link} text={bk.title} /></b> by {bk.author}
            </Box>
          </Box>
        ))}
      </div>
    </MoreAboutLayout>
  );
}
