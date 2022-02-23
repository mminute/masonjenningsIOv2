import React, { useState } from 'react';
import { BOARD_GAME, VIDEO_GAME, PLATFORM } from '../../DATA/games'
import TagsCollectionController from '../TagsCollectionController';

const Platforms = Object.values(PLATFORM);

function matchTitle(item, searchTerm) {
  return (item.title || '').toLowerCase().match(searchTerm.replace(/^(\/|\\)/, ''));
}

function matchTags(item, selectedTags) {
  return selectedTags.every((tag) => {
    if (tag === 'vr') {
      return item.vr;
    }

    if (tag === BOARD_GAME) {
      return item.type === BOARD_GAME;
    }

    if (tag === VIDEO_GAME) {
      return item.type === VIDEO_GAME;
    }

    if (tag === 'completed') {
      return item.completed;
    }

    if (tag === 'owned') {
      return item.owned;
    }

    if (tag === 'played') {
      return item.played;
    }

    if (tag === 'recommended') {
      return item.recommended;
    }

    if (Platforms.includes(tag)) {
      return item.platform === tag;
    }

    return false; // If we get here the tag is bad data
  });
}

function filterBySearch({
  items,
  searchTerm,
  selectedTags,
}) {
  if (!searchTerm && !selectedTags.length) {
    return items;
  }

  return items.filter(item => {
    let title = matchTitle(item, searchTerm);
    let tagList = true;

    if (selectedTags.length) {
      tagList = matchTags(item, selectedTags);
    }

    return selectedTags.length ? tagList && title : title;
  });
}

function GamesFiltersController({ children, data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sort, setSort] = useState('title'); // title, type,

  const sortBy = (itemA, itemB) => {
    const low = sortOrder === 'ascending' ? -1 : 1;
    const high = sortOrder === 'ascending' ? 1 : -1;

    let valueA = itemA.title;
    let valueB = itemB.title;
    if (sort === 'type') {
      valueA = itemA.type;
      valueB = itemB.type;
    }

    return valueA < valueB ? low : high;
  };

  return (
    <TagsCollectionController>
      {({ handleAddTag, handleRemoveTag, selectedTags, setSelectedTags }) => {
        const items = filterBySearch({
          items: data,
          searchTerm,
          selectedTags,
        }).sort(sortBy);

        return children({
          handleAddTag,
          handleRemoveTag,
          items,
          searchTerm,
          selectedTags,
          setSearchTerm,
          setSelectedTags,
          setSort,
          setSortOrder,
          sort,
          sortOrder,
        });
      }}
    </TagsCollectionController>
  );
}

export default GamesFiltersController;
