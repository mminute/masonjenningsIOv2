import React, { Fragment, useState } from 'react';
import Tags from '../Tags';
import {
  Box,
  Button,
  CompositeZIndex,
  FixedZIndex,
  IconButton,
  Layer,
  Mask,
  Modal,
} from 'gestalt';

function Show({ data, onAddTag }) {
  const { imdbData, imdbId, title } = data;
  const { Actors, Genre, imdbRating, Plot, Poster, Runtime, Year } = imdbData || {};
  const [expanded, setExpanded] = useState(false);
  const [showPoster, setshowPoster] = useState(false);

  const genreList = (Genre || '').split(',').map((genre) => {
    return (genre.trim());
  });

  // The sticky header gets a zIndex of 1 in Header.css
  const HEADER_ZINDEX = new FixedZIndex(1);
  const zIndex = new CompositeZIndex([HEADER_ZINDEX]);

  return (
    <Fragment>
      <Box width="100%">
        <Box display="flex" direction="row" alignItems="center" marginStart={5}>
          <IconButton
            accessibilityLabel={expanded ? 'Show less' : 'Show More'}
            disabled={!imdbData}
            icon={expanded ? 'arrow-up' : 'arrow-down'}
            onClick={() => setExpanded(current => !current)}
            size="sm"
          />

          <Box display="flex" direction="row" marginStart={2}>
            <a
              href={imdbId ? `https://www.imdb.com/title/${imdbId}/` : ''}
              target={imdbId ? '_blank' : ''}
            >
              {title}
            </a>
            <Box marginStart={3}>{imdbData && `(${Year})`}</Box>
          </Box>
        </Box>

        {expanded && (
          <Box
            display="flex"
            direction="row"
            alignItems="center"
            marginStart={12}
          >
            <Box marginStart={3}>
              {genreList.length && (
                <Tags
                  onTap={onAddTag}
                  tagKey={`${imdbId}-genres`}
                  tags={genreList}
                  title="Genres"
                />
              )}

              {Runtime && (
                <Box marginTop={2}>{Runtime && `Runtime: ${Runtime}`}</Box>
              )}

              {imdbRating && (
                <Box marginTop={2}>{`IMDb rating: ${imdbRating} / 10`}</Box>
              )}

              {Plot && (
                <Box marginTop={2}>
                  Plot:
                  <br />
                  {Plot}
                </Box>
              )}

              {Actors && (
                <Box marginTop={2}>
                  Starring: {Actors}
                </Box>
              )}

              {Poster && (
                <Box marginTop={4}>
                  <Button
                    color="transparent"
                    text="See the poster"
                    size="md"
                    inline
                    onClick={() => setshowPoster(current => !current)}
                  />
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>

      {showPoster && (
        <Layer zIndex={zIndex}>
          <Modal
            accessibilityModalLabel={`Poster for ${title}`}
            footer={
              <Box display="flex" justifyContent="end">
                <Button
                  color="red"
                  inline
                  onClick={() => setshowPoster(false)}
                  text="Close"
                />
              </Box>
            }
            heading={title}
            onDismiss={() => setshowPoster(false)}
            size="sm"
          >
            <Box display="flex" justifyContent="center" paddingY={6}>
              <Mask rounding={8}>
                <img src={Poster} alt={`Poster for ${title}`} />
              </Mask>
            </Box>
          </Modal>
        </Layer>
      )}
    </Fragment>
  );
}

export default Show;
