import { useState } from 'react';

function TagsCollectionController({ children }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleAddTag = tag => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags(current => [...current, tag]);
    }
  };

  const handleRemoveTag = tag => {
    setSelectedTags(current => current.filter(t => t !== tag));
  };

  return children({ handleAddTag, handleRemoveTag, selectedTags, setSelectedTags })
}

export default TagsCollectionController;
