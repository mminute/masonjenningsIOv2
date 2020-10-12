export function sortBy(key, order) {
  return (bookA, bookB) => {
    const low = order === 'ascending' ? -1 : 1;
    const high = order === 'ascending' ? 1 : -1;

    return bookA[key] < bookB[key] ? low : high;
  };
}

function matchAuthor(book, searchTerm) {
  return book.author.toLowerCase().match(searchTerm);
}

function matchTitle(book, searchTerm) {
  return book.title.toLowerCase().match(searchTerm);
}

function matchSearchTags(book, searchTerm) {
  return book.tags.join(',').toLowerCase().match(searchTerm);
}

function matchTagList(book, selectedTags) {
  return book.tags.some( bkTag => selectedTags.includes(bkTag));
}

export function filterBySearch({
  books,
  searchFilter,
  searchTerm,
  selectedTags,
}) {
  if (!searchTerm && !selectedTags.length) {
    return books;
  }

  return books.filter(book => {
    let author = false;
    let searchTags = false;
    let title = false;
    let tagList = true;

    if (searchFilter === 'author') {
      author = matchAuthor(book, searchTerm);
    }

    if (searchFilter === 'title') {
      title = matchTitle(book, searchTerm);
    }

    if (searchFilter === 'tags') {
      searchTags = matchSearchTags(book, searchTerm);
    }

    if (searchFilter === 'all') {
      author = matchAuthor(book, searchTerm);
      title = matchTitle(book, searchTerm);
      searchTags = matchSearchTags(book, searchTerm);
    }

    if (selectedTags.length) {
      tagList = matchTagList(book, selectedTags);
    }

    const searchTermMatch = author || searchTags || title;

    return selectedTags.length ? tagList && searchTermMatch : searchTermMatch;
  });
}
