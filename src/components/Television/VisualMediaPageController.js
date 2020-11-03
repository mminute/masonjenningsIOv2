import { useState } from 'react';
import filterBySearch from './tvDataUtils';

export default function VisualMediaPageController({ children, data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOder] = useState('ascending');
  const [sort, setSort] = useState('firstAired');

  const handleAddTag = tag => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags(current => [...current, tag]);
    }
  };

  const handleRemoveTag = tag => {
    setSelectedTags(current => current.filter(t => t !== tag));
  };

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
    setSortOder,
    sort,
    setSort,
    searchFilter,
    setSearchFilter,
    searchTerm,
    setSearchTerm,
  });
}
