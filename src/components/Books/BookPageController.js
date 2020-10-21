import React, { useState } from 'react';
import { filterBySearch, sortBy } from './dataUtils';

export default function BookPageController({ children, data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sort, setSort] = useState('date');
  const [sortOrder, setSortOder] = useState('ascending');

  const filteredAndSorted = filterBySearch({
    books: data,
    searchFilter,
    searchTerm,
    selectedTags,
  }).sort(sortBy(sort, sortOrder));

  const handleAddTag = tag => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags(current => [...current, tag]);
    }
  };

  const handleRemoveTag = tag => {
    setSelectedTags(current => current.filter(t => t !== tag));
  };

  return children({
    books: filteredAndSorted,
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
  });
}
