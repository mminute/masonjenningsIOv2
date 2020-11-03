import React from 'react';
import { SelectList } from 'gestalt';

export default function SearchFilterSelect(props) {
  const {
    searchFilter,
    setSearchFilter,
  } = props;

  return (
    <SelectList
      id="searchFilter"
      name="searchFilter"
      onChange={({ value }) => setSearchFilter(value)}
      options={[
        { value: 'all', label: 'All' },
        { value: 'author', label: 'Author' },
        { value: 'title', label: 'Title' },
        { value: 'tags', label: 'Tags' },
      ]}
      placeholder="Search filter"
      value={searchFilter}
    />
  );
}
