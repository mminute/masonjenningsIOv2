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

function summarizer(items) {
  const reducer = (accumulator, entry) => {
    const count = accumulator[entry];
    if (count) {
      accumulator[entry] += 1;
    } else {
      accumulator[entry] = 1;
    }

    return accumulator;
  }

  const counts = items.reduce(reducer, {});

  return Object.keys(counts).sort((a, b) => {
    const countA = counts[a];
    const countB = counts[b];
    if (countA < countB) {
      return -1;
    }
    if (countA > countB) {
      return 1;
    }

    return 0;
  }).reverse().map((t) => {
    return [t, counts[t]];
  });
}

function summarizeDates(dates) {
  const parsed = dates.map((d) => {
    const [_, year, month] = d.match(/(\d{4})-(\d{2})/);

    return { month, year };
  });

  return parsed.reduce((accumulator, monthAndYear) => {
    const { month, year } = monthAndYear;
    const monthIdx = parseInt(month, 10) - 1;

    if (accumulator[year]) {
      accumulator[year][monthIdx] += 1;
    } else {
      const months = Array(12).fill(0);
      months[monthIdx] = 1
      accumulator[year] = months;
    }

    return accumulator;
  }, {});
 }

export function summarize(data) {
  const allAuthors = data.map(book => book.author);
  
  const allDates = data.map(book => book.date);

  const allTags = data.reduce((accumulator, book) => {
    return [...accumulator, ...book.tags];
  }, []);

  const authors = summarizer(allAuthors);
  const dates = summarizeDates(allDates);
  const tags = summarizer(allTags);

  return { authors, dates, tags };
}
