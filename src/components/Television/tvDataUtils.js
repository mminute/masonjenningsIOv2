function matchX(field, searchTerm) {
  return (field || '').toLowerCase().match(searchTerm.replace(/^(\/|\\)/, ''));
}

function matchTitle(item, searchTerm) {
  return matchX(item.title, searchTerm);
}

function matchActors(item, searchTerm) {
  return matchX(item.imdbData?.Actors, searchTerm)
}

function matchGenre(item, searchTerm) {
  return matchX(item.imdbData?.Genre, searchTerm)
}

function matchTags(item, selectedTags) {
  return selectedTags.some((tag) => {
    return (item.imdbData?.Genre?.toLowerCase() || '').match(tag.toLowerCase());
  });
}

export default function filterBySearch({
  items,
  searchFilter,
  searchTerm,
  selectedTags,
}) {
  if (!searchTerm && !selectedTags.length) {
    return items;
  }

  return items.filter(item => {
    let actor = false;
    let genre = false;
    let title = false;
    let tagList = true;

    if (searchFilter === 'actor') {
      actor = matchActors(item, searchTerm);
    }

    if (searchFilter === 'genre') {
      genre = matchGenre(item, searchTerm);
    }

    if (searchFilter === 'title') {
      title = matchTitle(item, searchTerm);
    }

    if (searchFilter === 'all') {
      actor = matchActors(item, searchTerm);
      genre = matchGenre(item, searchTerm);
      title = matchTitle(item, searchTerm);
    }

    if (selectedTags.length) {
      tagList = matchTags(item, selectedTags);
    }

    const searchTermMatch = actor || genre || title;

    return selectedTags.length ? tagList && searchTermMatch : searchTermMatch;
  });
}