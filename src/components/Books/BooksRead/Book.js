import React, { useState } from 'react';
import { Box, Icon, IconButton, Row, Stack, TapArea, Tooltip } from 'gestalt';

function Review({ rating }) {
  return (
    <Box width={20} marginEnd={2}>
      {rating === 1 && <Tooltip text="I liked this one!">😃</Tooltip>}
    </Box>
  );
}

function Note({ text }) {
  return (
    <Tooltip text={text} inline>
      <Box alignItems="center">
        <b>Notes</b>
        <Box display="inlineBlock" marginStart={1}>
          <Icon accessibilityLabel="See my notes" icon="info-circle" inline />
        </Box>
      </Box>
    </Tooltip>
  );
}

function Tags({ bookTagKey, tags, onAddTag }) {
  return (
    <Row>
      tags:
      <Box marginStart={1}>
        {tags.map((t, idx) => (
          <Box key={`${bookTagKey}-${t}`} display="inlineBlock" marginEnd={2}>
            <Row>
              <TapArea onTap={() => onAddTag(t)}>
                <i>{t}</i>
              </TapArea>
              {tags.length > 1 && idx !== tags.length - 1 && ','}
            </Row>
          </Box>
        ))}
      </Box>
    </Row>
  );
}

function Links({ goodReadsId, googleLink }) {
  return (
    <Row gap={2}>
      {goodReadsId && (
        <a
          href={`https://www.goodreads.com/book/show/${goodReadsId}`}
          target="_blank"
        >
          Goodreads
        </a>
      )}

      {googleLink && (
        <a href={googleLink} target="_blank">
          GoogleBooks
        </a>
      )}
    </Row>
  );
}

function BookDense({ data, onAddTag }) {
  const {
    author,
    date,
    goodReadsId,
    googleData,
    notes,
    review,
    tags,
    title,
  } = data;

  const [expanded, setExpanded] = useState(false);

  return (
    <Box>
      <Row justifyContent="between" alignItems="center">
        <Box direction="row" display="flex" alignItems="center">
          <IconButton
            accessibilityLabel={expanded ? 'Show less' : 'Show More'}
            icon={expanded ? 'arrow-up' : 'arrow-down'}
            onClick={() => setExpanded(current => !current)}
            size="sm"
          />

          <Box marginStart={2}>
            <Review rating={review} />
          </Box>

          <Box>
            <b>{title}</b> by {author}
          </Box>
        </Box>

        <Box marginEnd={7}>{date.match(/\d*-\d\d-\d\d/)}</Box>
      </Row>

      {expanded && (
        <Box marginStart={12}>
          <Box marginStart={5}>
            <Tags
              bookTagKey={`${title}-${date}`}
              tags={tags}
              onAddTag={onAddTag}
            />
            {notes && <Note text={notes} />}
            <Links
              goodReadsId={goodReadsId}
              googleLink={googleData.volumeInfo.canonicalVolumeLink}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

function BookDefault({ data, onAddTag }) {
  const {
    author,
    date,
    goodReadsId,
    googleData,
    notes,
    review,
    tags,
    title,
  } = data;

  return (
    <Row justifyContent="between" alignItems="center">
      <Box direction="row" display="flex">
        <Review rating={review} />

        <Stack>
          <b>{title}</b>
          <Box marginStart={3}>
            <Stack>
              <Box>by {author}</Box>

              <Tags
                bookTagKey={`${title}-${date}`}
                onAddTag={onAddTag}
                tags={tags}
              />

              {notes && <Note text={notes} />}

              <Links
                goodReadsId={goodReadsId}
                googleLink={googleData.volumeInfo.canonicalVolumeLink}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box marginEnd={7}>{date.match(/\d*-\d\d-\d\d/)}</Box>
    </Row>
  );
}

export default function Book({ data, density, onAddTag }) {
  return density ? (
    <BookDense data={data} onAddTag={onAddTag} />
  ) : (
    <BookDefault data={data} onAddTag={onAddTag} />
  );
}
