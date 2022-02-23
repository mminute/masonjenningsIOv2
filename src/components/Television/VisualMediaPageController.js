import React, { useState } from 'react';
import filterBySearch from './tvDataUtils';
import TagsCollectionController from '../TagsCollectionController';

export default function VisualMediaPageController({ children, data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [sort, setSort] = useState('firstAired');

  const sortBy = (itemA, itemB) => {
    const low = sortOrder === 'ascending' ? -1 : 1;
    const high = sortOrder === 'ascending' ? 1 : -1;

    let valueA, valueB;
    if (sort === 'firstAired') {
      valueA = (itemA.imdbData?.Year.match(/\d*/) || [])[0];
      valueB = (itemB.imdbData?.Year.match(/\d*/) || [])[0];
    } else if (sort === 'title') {
      valueA = itemA.title;
      valueB = itemB.title;
    } else if (sort === 'imdbRating') {
      valueA = parseFloat(itemA.imdbData?.imdbRating || '0');
      valueB = parseFloat(itemB.imdbData?.imdbRating || '0');
    }

    return valueA < valueB ? low : high;
  };

  return (
    <TagsCollectionController>
      {({ handleAddTag, handleRemoveTag, selectedTags }) => {
        const items = filterBySearch({
          items: data,
          searchFilter,
          searchTerm,
          selectedTags,
        }).sort(sortBy);

        return children({
          items,
          selectedTags,
          handleAddTag,
          handleRemoveTag,
          sortOrder,
          setSortOrder,
          sort,
          setSort,
          searchFilter,
          setSearchFilter,
          searchTerm,
          setSearchTerm,
        })
      }}
    </TagsCollectionController>
  );
}
